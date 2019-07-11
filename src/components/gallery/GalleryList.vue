<template>
  <div>
    <ul class="list" v-infinite-scroll="load" :infinite-scroll-distance="20">
      <li
        v-for="(item,index) in imageList"
        :key="index"
        @mouseover="show('pop_' + index)"
        @mouseout="hide('pop_' + index)"
        :title="item.name"
      >
        <img :src="requestUrl + '/upload/' + item.imgPath" />
        <span class="pop" :id="'pop_' + index">
          <i
            class="el-icon-zoom-in"
            @click="viewBigImg(requestUrl + '/upload/' + item.imgPath)"
            style="margin-right:10px;font-size:20px;color:#fff;cursor: pointer;"
          ></i>
          <i
            class="el-icon-delete"
            @click="deleteImg(item._id)"
            style="font-size:20px;color:#fff;cursor: pointer;"
          ></i>
        </span>
        <span class="remark">{{item.remark}}</span>
      </li>
      <li v-show="loading" style="width:100%;height:30px;font-size:16px;">暂无更多数据</li>
    </ul>
    <el-dialog :visible.sync="bigImagedialogVisible">
      <img width="100%" :src="bigImageUrl" />
    </el-dialog>
  </div>
</template>

<script>
import { deleteImage } from "@/api";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "gallery"
);
import { requestUrl } from "@/default";
let loading = false;
export default {
  mounted() {
    let gallery_container = document.getElementById("gallery-container"),
      gallery_header = document.getElementsByClassName("gallery-header")[0],
      list = document.getElementsByClassName("list")[0];
    let height =
      gallery_container.clientHeight - gallery_header.clientHeight - 1 + "px";
    list.style.height = height;
    let width = gallery_container.clientWidth;
    let row = width / 146;
    let column = parseInt(height) / 150;
    this.setRows(Math.floor(row * column));
    this.setImageList([]);
    this.getImageList();
  },
  data() {
    return {
      requestUrl,
      loading: false,
      bigImagedialogVisible: false,
      bigImageUrl: ""
    };
  },
  computed: {
    ...mapState(["imageList", "pagination"])
  },
  methods: {
    show(id) {
      document.getElementById(id).style.display = "inline";
    },
    hide(id) {
      document.getElementById(id).style.display = "none";
    },
    viewBigImg(path) {
      this.bigImagedialogVisible = true;
      this.bigImageUrl = path;
    },
    deleteImg(id) {
      if (loading) {
        return;
      }
      this.$confirm("此操作将删除此图片信息,且后续不可恢复,是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          loading = true;
          deleteImage(id).then(data => {
            loading = false;
            let type;
            if (data.status === 1) {
              type = "success";
              this.imageList.forEach((element, index) => {
                if (element._id === id) {
                  this.imageList.splice(index, 1);
                }
              });
            } else {
              type = "error";
            }
            this.$message({
              message: data.message,
              type,
              customClass: "top"
            });
          });
        })
        .catch(() => {
          return;
        });
    },
    ...mapMutations(["setRows", "setCurrentPage", "setImageList"]),
    ...mapActions(["getImageList"]),
    load() {
      if (this.pagination.currentPage !== this.pagination.totalPage) {
        this.setCurrentPage(this.pagination.currentPage + 1);
        this.getImageList();
      } else {
        this.loading = true;
      }
    }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
.list > li {
  position: relative;
  margin: 9px;
  text-align: center;
  font-size: 0;
  width: 146px;
  height: 146px;
}
.list img {
  width: 146px;
  height: 146px;
}

.pop {
  display: none;
  position: absolute;
  left: 0;
  width: 146px;
  height: 146px;
  text-align: center;
  line-height: 146px;
  background-color: rgba(0, 0, 0, 0.5);
}

.remark {
  display: inline-block;
  width: 100%;
  height: 20px;
  font-size: 12px;
  color: #888888;
}
</style>
