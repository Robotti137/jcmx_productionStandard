<template>
  <div>
    <el-dialog title="新增户型开工单" :visible.sync="houseUpdateDialogVisible" width="70%" append-to-body>
      <div class="container">
        <el-form :model="houseData" label-width="240px" ref="houseForm">
          <el-form-item label="文档编号：">
            <el-input type="text" size="small" v-model="houseData.documentNumber"></el-input>
          </el-form-item>
          <el-form-item label="项目名称：">
            <el-input type="text" size="small" v-model="houseData.projectName"></el-input>
          </el-form-item>
          <el-form-item label="下单日期：">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              size="small"
              style="width:100%"
              v-model="houseData.orderDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="完成日期：">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              size="small"
              style="width:100%"
              v-model="houseData.completeDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="项目节点总负责人：">
            <el-input type="text" size="small" v-model="houseData.projectPrincipal"></el-input>
          </el-form-item>
          <el-form-item label="项目策划人：">
            <el-input type="text" size="small" v-model="houseData.projectPlanner"></el-input>
          </el-form-item>
          <el-form-item label="业务员：">
            <el-input type="text" size="small" v-model="houseData.salesman"></el-input>
          </el-form-item>
          <el-form-item label="项目地址：" style="color:red">
            <el-input type="text" size="small" v-model="houseData.projectAddress"></el-input>
          </el-form-item>
          <h3 style="text-align:center">模型制作内容（模型范围示意图）</h3>
          <el-form-item label="项目沙盘："></el-form-item>
          <el-form-item>
            模型数量
            <br />
            <el-input-number v-model="houseData.projectSandTable.number" :min="0" size="small"></el-input-number>
          </el-form-item>
          <el-form-item>
            模型比例
            <br />
            <el-input
              type="text"
              size="small"
              style="width:48%;margin-right:4%;"
              placeholder="景观"
              v-model="houseData.projectSandTable.landscape"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="建筑"
              v-model="houseData.projectSandTable.building"
            ></el-input>
          </el-form-item>
          <el-form-item>
            地盘规格
            <br />
            <el-input
              type="text"
              size="small"
              style="width:48%;margin-right:4%;"
              placeholder="外尺寸"
              v-model="houseData.projectSandTable.externalDimensions"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="内尺寸"
              v-model="houseData.projectSandTable.innerDimension"
            ></el-input>
          </el-form-item>
          <el-form-item label="升降设备："></el-form-item>
          <el-form-item>
            模型数量
            <br />
            <el-input-number v-model="houseData.liftingEquipment.number" :min="0" size="small"></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-radio-group v-model="houseData.liftingEquipment.type">
              <el-radio label="直升"></el-radio>
              <el-radio label="选升">选升</el-radio>
              <el-radio label="层数">层数</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="其它："></el-form-item>
          <el-form-item>
            模型数量
            <br />
            <el-input-number v-model="houseData.other.number" :min="0" size="small"></el-input-number>
          </el-form-item>
          <el-form-item>
            模型比例
            <br />
            <el-input
              type="text"
              size="small"
              style="width:48%;margin-right:4%;"
              placeholder="景观"
              v-model="houseData.other.landscape"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="建筑"
              v-model="houseData.other.building"
            ></el-input>
          </el-form-item>
          <el-form-item>
            地盘规格
            <br />
            <el-input
              type="text"
              size="small"
              style="width:48%;margin-right:4%;"
              placeholder="外尺寸"
              v-model="houseData.other.externalDimensions"
            ></el-input>
            <el-input
              type="text"
              size="small"
              style="width:48%;"
              placeholder="内尺寸"
              v-model="houseData.other.innerDimension"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <el-checkbox-group v-model="houseData.productionType">
              <el-checkbox label="玻璃罩"></el-checkbox>
              <el-checkbox label="玻璃护栏"></el-checkbox>
              <el-checkbox label="自定义厚度及高度"></el-checkbox>
              <el-checkbox label="其它特殊要求"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <h3 style="text-align:center">模型底座要求</h3>
          <el-form-item label="户型沙盘：">
            <el-checkbox-group v-model="houseData.modelBase.householdTandTable">
              <el-checkbox label="石材"></el-checkbox>
              <el-checkbox label="木质"></el-checkbox>
              <el-checkbox label="皮革"></el-checkbox>
              <el-checkbox label="玻璃"></el-checkbox>
              <el-checkbox label="亚克力"></el-checkbox>
              <el-checkbox label="不锈钢"></el-checkbox>
              <el-checkbox label="高度"></el-checkbox>
              <el-checkbox label="其它"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="户型模型：">
            <el-checkbox-group v-model="houseData.modelBase.houseModel">
              <el-checkbox label="石材"></el-checkbox>
              <el-checkbox label="木质"></el-checkbox>
              <el-checkbox label="皮革"></el-checkbox>
              <el-checkbox label="玻璃"></el-checkbox>
              <el-checkbox label="亚克力"></el-checkbox>
              <el-checkbox label="不锈钢"></el-checkbox>
              <el-checkbox label="高度"></el-checkbox>
              <el-checkbox label="其它"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="底座参考图："></el-form-item>
          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="1"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :on-success="uploadHDMBMap"
                :before-upload="beforeUpload"
                ref="uploadHDMBMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(6,houseData.modelBase)"
              >图库选择</el-button>
              <span class="prompt">注：参考图只能插入一张,且大小不能超出4MB</span>
            </div>
            <div v-if="houseData.modelBase.referenceMap" class="reference-map-container">
              <i
                class="el-icon-circle-close close"
                @click="houseData.modelBase.referenceMap ='';$refs.uploadHDMBMap.clearFiles()"
              ></i>
              <img
                class="reference-map"
                :src="requestUrl + '/upload/' + houseData.modelBase.referenceMap"
              />
            </div>
          </el-form-item>
          <el-form-item label="其它要求说明：">
            <el-input type="textarea" v-model="houseData.modelBase.description"></el-input>
          </el-form-item>
          <h3 style="text-align:center">户型制作要求</h3>
          <el-form-item label="户型风格：">
            <el-checkbox-group v-model="houseData.houseType.houseStyle">
              <el-checkbox label="简欧"></el-checkbox>
              <el-checkbox label="住宅现代"></el-checkbox>
              <el-checkbox label="办公现代"></el-checkbox>
              <el-checkbox label="欧式"></el-checkbox>
              <el-checkbox label="中式"></el-checkbox>
              <el-checkbox label="田园"></el-checkbox>
              <el-checkbox label="新古典"></el-checkbox>
              <el-checkbox label="现代简欧"></el-checkbox>
              <el-checkbox label="东南亚"></el-checkbox>
              <el-checkbox label="美式"></el-checkbox>
              <el-checkbox label="地中海"></el-checkbox>
              <el-checkbox label="藏式"></el-checkbox>
              <el-checkbox label="其它(参照图片)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="办公及酒店风格：">
            <el-checkbox-group v-model="houseData.houseType.officeHotelStyle">
              <el-checkbox label="简欧"></el-checkbox>
              <el-checkbox label="住宅现代"></el-checkbox>
              <el-checkbox label="办公现代"></el-checkbox>
              <el-checkbox label="欧式"></el-checkbox>
              <el-checkbox label="中式"></el-checkbox>
              <el-checkbox label="田园"></el-checkbox>
              <el-checkbox label="新古典"></el-checkbox>
              <el-checkbox label="现代简欧"></el-checkbox>
              <el-checkbox label="东南亚"></el-checkbox>
              <el-checkbox label="美式"></el-checkbox>
              <el-checkbox label="地中海"></el-checkbox>
              <el-checkbox label="藏式"></el-checkbox>
              <el-checkbox label="其它(参照图片)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="平层户型制作要求：">
            <el-checkbox-group v-model="houseData.houseType.flatFloorProduction">
              <el-checkbox label="外墙"></el-checkbox>
              <el-checkbox label="透明(外墙)"></el-checkbox>
              <el-checkbox label="写实(外墙)"></el-checkbox>
              <el-checkbox label="贴水银(外墙)"></el-checkbox>
              <el-checkbox label="贴银铂纸(外墙)"></el-checkbox>
              <el-checkbox label="木质(外墙)"></el-checkbox>
              <el-checkbox label="磨砂(外墙)"></el-checkbox>
              <el-checkbox label="其它(外墙 参照图片)"></el-checkbox>
              <el-checkbox label="内墙"></el-checkbox>
              <el-checkbox label="透明(内墙)"></el-checkbox>
              <el-checkbox label="写实(内墙)"></el-checkbox>
              <el-checkbox label="贴水银(内墙)"></el-checkbox>
              <el-checkbox label="贴银铂纸(内墙)"></el-checkbox>
              <el-checkbox label="木质(内墙)"></el-checkbox>
              <el-checkbox label="磨砂(内墙)"></el-checkbox>
              <el-checkbox label="其它(内墙 参照图片)"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="跃层户型制作要求：">
            <el-checkbox-group v-model="houseData.houseType.leapFloorProduction">
              <el-checkbox label="外墙"></el-checkbox>
              <el-checkbox label="透明(外墙)"></el-checkbox>
              <el-checkbox label="写实(外墙)"></el-checkbox>
              <el-checkbox label="贴水银(外墙)"></el-checkbox>
              <el-checkbox label="贴银铂纸(外墙)"></el-checkbox>
              <el-checkbox label="木质(外墙)"></el-checkbox>
              <el-checkbox label="磨砂(外墙)"></el-checkbox>
              <el-checkbox label="其它(外墙 参照图片)"></el-checkbox>
              <el-checkbox label="连体"></el-checkbox>
              <el-checkbox label="内墙"></el-checkbox>
              <el-checkbox label="透明(内墙)"></el-checkbox>
              <el-checkbox label="写实(内墙)"></el-checkbox>
              <el-checkbox label="贴水银(内墙)"></el-checkbox>
              <el-checkbox label="贴银铂纸(内墙)"></el-checkbox>
              <el-checkbox label="木质(内墙)"></el-checkbox>
              <el-checkbox label="磨砂(内墙)"></el-checkbox>
              <el-checkbox label="其它(内墙 参照图片)"></el-checkbox>
              <el-checkbox label="撑开"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="户型及单体内部灯光：">
            <el-checkbox-group v-model="houseData.houseType.houseLight">
              <el-checkbox label="灯光"></el-checkbox>
              <el-checkbox label="MP4屏播放器"></el-checkbox>
              <el-checkbox label="背景墙灯光"></el-checkbox>
              <el-checkbox label="节点灯光"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="户型及单体内部灯光：">
            <el-radio-group v-model="houseData.houseType.houseLayoutPicture">
              <el-radio label="有"></el-radio>
              <el-radio label="无"></el-radio>
              <el-radio label="有(参照效果图)"></el-radio>
              <el-radio label="无(参照效果图)"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="制作效果等级：">
            <el-radio-group v-model="houseData.houseType.productionEffectLevel">
              <el-radio label="简装"></el-radio>
              <el-radio label="精装"></el-radio>
              <el-radio label="精品精装"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="其它特殊要求及具体制作内容说明：">
            <el-input type="textarea" v-model="houseData.houseType.claimSpecificDescription"></el-input>
          </el-form-item>
          <el-form-item>
            插入参考图
            <br />
            <div class="flex">
              <el-upload
                :action="requestUrl + '/upload'"
                :limit="3"
                accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG"
                :before-upload="beforeUpload"
                :on-success="uploadHDHTMap"
                ref="uploadHDHTMap"
              >
                <el-button size="small" type="primary" plain>自行上传</el-button>
              </el-upload>
              <el-button
                size="small"
                type="primary"
                plain
                @click="openGallery(4,houseData.houseType)"
              >图库选择</el-button>
              <span class="prompt">注：参考图最多插入三张,且大小不能超出4MB</span>
            </div>
            <div style="display:flex;">
              <div v-if="houseData.houseType.referenceMap[0]" class="reference-map-container">
                <i
                  class="el-icon-circle-close close"
                  @click="houseData.houseType.referenceMap.splice(0,1);$refs.uploadHDHTMap.clearFiles()"
                ></i>
                <img
                  class="reference-map"
                  :src="requestUrl + '/upload/' + houseData.houseType.referenceMap[0]"
                />
              </div>
              <div v-if="houseData.houseType.referenceMap[1]" class="reference-map-container">
                <i
                  class="el-icon-circle-close close"
                  @click="houseData.houseType.referenceMap.splice(1,1);$refs.uploadHDHTMap.clearFiles()"
                ></i>
                <img
                  class="reference-map"
                  :src="requestUrl + '/upload/' + houseData.houseType.referenceMap[1]"
                />
              </div>
              <div v-if="houseData.houseType.referenceMap[2]" class="reference-map-container">
                <i
                  class="el-icon-circle-close close"
                  @click="houseData.houseType.referenceMap.splice(2,1);$refs.uploadHDHTMap.clearFiles()"
                ></i>
                <img
                  class="reference-map"
                  :src="requestUrl + '/upload/' + houseData.houseType.referenceMap[2]"
                />
              </div>
            </div>
          </el-form-item>
          <el-form-item label="其它特殊要求及建筑制作内容说明：">
            <el-input type="textarea" v-model="houseData.houseType.claimBuildDescription"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateOrder">保 存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <OrderAddPop />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("order");
const houseMapState = createNamespacedHelpers("houseOrder").mapState;
const houseMapActions = createNamespacedHelpers("houseOrder").mapActions;
const houseMapMutations = createNamespacedHelpers("houseOrder").mapMutations;
import { requestUrl } from "@/default";
const OrderAddPop = () => import("../common/OrderAddPop");
import { putHouseOrder } from "@/api";
let loading = false;
export default {
  updated() {
    const oUpload = document.getElementsByClassName("el-upload-list");
    for (let i = 0; i < oUpload.length; i++) {
      oUpload[i].style.display = "none";
    }
  },
  data() {
    return {
      requestUrl
    };
  },
  computed: {
    ...houseMapState(["houseData"]),
    houseUpdateDialogVisible: {
      get() {
        return this.$store.state.houseOrder.houseUpdateDialogVisible;
      },
      set(value) {
        this.$store.commit("houseOrder/setHouseUpdateDialogVisible", value);
      }
    }
  },
  methods: {
    ...mapMutations(["setImgListdialogVisible", "setType", "setObj"]),
    ...houseMapActions(["getOrderList"]),
    ...houseMapMutations(["setHouseUpdateDialogVisible"]),
    beforeUpload(file) {
      if (file.size / 1024 / 1024 > 4) {
        this.$notify.error({
          title: "错误",
          message: "图片大小不能超出4MB"
        });
        return false;
      }
    },
    openGallery(type, obj) {
      this.setImgListdialogVisible(true);
      this.setType(type);
      this.setObj(obj);
    },
    uploadHDMBMap(response) {
      if (response.status !== 1) {
        this.$notify.error({
          title: "错误",
          message: "图片上传失败"
        });
        return;
      }

      this.houseData.modelBase.referenceMap = response.filename;
    },
    uploadHDHTMap(response) {
      if (response.status !== 1) {
        this.$notify.error({
          title: "错误",
          message: "图片上传失败"
        });
        return;
      }

      if (this.houseData.houseType.referenceMap.length === 3) {
        return;
      }

      this.houseData.houseType.referenceMap = [
        ...this.houseData.houseType.referenceMap,
        response.filename
      ];
    },
    updateOrder() {
      if (loading) {
        return;
      }

      const { houseData } = this,
        id = houseData._id,
        sendData = { ...houseData };
      delete sendData._id;

      loading = true;
      putHouseOrder(id, sendData).then(data => {
        loading = false;
        let type;
        if (data.status === 1) {
          type = "success";
          this.getOrderList();
          this.setHouseUpdateDialogVisible(false);
        } else {
          type = "error";
        }
        this.$message({
          message: data.message,
          type
        });
      });
    }
  },
  components: {
    OrderAddPop
  }
};
</script>

<style scoped>
@import "../../../../static/css/order_common.css";
</style>