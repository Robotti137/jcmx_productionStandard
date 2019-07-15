<template>
  <div>
    <el-button type="primary" size="small" @click="imageDialogVisible = true">添加图片</el-button>

    <!-- 新增图片弹框 -->
    <el-dialog title="新增图片" :visible.sync="close" width="30%">
      <el-form :model="imageData" :rules="rules" ref="imageForm" label-width="80px">
        <el-form-item label="类型" required prop="type">
          <el-select v-model="imageData.type" placeholder="请选择" style="width:320px;">
            <el-option label="建筑" :value="1"></el-option>
            <el-option label="景观" :value="2"></el-option>
            <el-option label="绿化" :value="3"></el-option>
            <el-option label="户型" :value="4"></el-option>
            <el-option label="区位" :value="5"></el-option>
            <el-option label="底座" :value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称" required prop="name">
          <el-input type="text" v-model="imageData.name" style="width:320px;"></el-input>
        </el-form-item>
        <el-form-item label="图片上传" required>
          <el-upload
            :action="requestUrl + '/upload'"
            list-type="picture-card"
            :limit="1"
            accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
            ref="imageUpload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span style="font-size:12px;color:#cccccc;">注：图片大小不能超出2MB</span>
        </el-form-item>
        <el-form-item label="备注" required prop="remark">
          <el-input type="textarea" v-model="imageData.remark" style="width:320px;"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="imgAdd">保 存</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="bigImagedialogVisible">
      <img width="100%" :src="bigImageUrl" />
    </el-dialog>
  </div>
</template>

<script>
import { postImage } from "@/api";
import { requestUrl } from "@/default";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapMutations } = createNamespacedHelpers("gallery");
let loading = false;
export default {
  data() {
    let valid = (rule, value, callback) => {
      if (!value) {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    return {
      requestUrl,
      imageDialogVisible: false,
      bigImagedialogVisible: false,
      bigImageUrl: "",
      imageData: {
        type: "",
        name: "",
        imgPath: "",
        remark: ""
      },
      rules: {
        type: [{ validator: valid, trigger: "blur" }],
        name: [{ validator: valid, trigger: "blur" }],
        remark: [{ validator: valid, trigger: "blur" }]
      }
    };
  },
  computed: {
    close: {
      get() {
        return this.imageDialogVisible;
      },
      set(value) {
        this.imageDialogVisible = value;
        this.emptyForm();
      }
    }
  },
  methods: {
    ...mapActions(["getImageList"]),
    ...mapMutations(["setImageList", "setCurrentPage"]),
    handleRemove() {
      this.imageData.imgPath = "";
    },
    handlePictureCardPreview(file) {
      this.bigImageUrl = file.url;
      this.bigImagedialogVisible = true;
    },
    handleSuccess(response) {
      this.imageData.imgPath = response.filename;
    },
    imgAdd() {
      if (loading) {
        return;
      }

      const { imageData } = this,
        { imageForm } = this.$refs;

      imageForm.validate(valid => {
        if (!valid) {
          return;
        }

        if (!imageData.imgPath) {
          this.$message({
            message: "请上传图片",
            type: "error"
          });
          return;
        }

        loading = true;
        postImage(imageData).then(data => {
          loading = false;
          let type;
          if (data.status === 1) {
            type = "success";
            this.imageDialogVisible = false;
            this.setImageList([]);
            this.setCurrentPage(1);
            this.getImageList();
            this.emptyForm();
          } else {
            type = "error";
          }
          this.$message({
            message: data.message,
            type
          });
        });
      });
    },
    emptyForm() {
      const { imageForm, imageUpload } = this.$refs;
      imageForm.resetFields();
      this.imageData.imgPath = "";
      imageUpload.clearFiles();
    },
    beforeUpload(file) {
      if (file.size / 1024 / 1024 > 2) {
        this.$notify.error({
          title: "错误",
          message: "图片大小不能超出2MB"
        });
        return false;
      }
    }
  }
};
</script>

<style>
.el-textarea__inner {
  height: 100px;
}
</style>
