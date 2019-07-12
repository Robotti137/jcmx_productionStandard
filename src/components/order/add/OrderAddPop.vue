<template>
  <el-dialog width="70%" :visible.sync="imgListdialogVisible">
    <ul style=" display:flex;flex-wrap:wrap;overflow:auto;">
      <li v-for="(item,index) in imageList" :key="index">
        <img
          :src="requestUrl + '/upload/' + item.imgPath"
          :title="item.name"
          @click="returnImageName(item.imgPath)"
        />
        <span class="remark">{{item.remark}}</span>
      </li>
    </ul>
  </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("order");
import { getImageList } from "@/api";
import { requestUrl } from "@/default";
export default {
  data() {
    return {
      requestUrl,
      imageList: []
    };
  },
  computed: {
    ...mapState(["type", "obj"]),
    imgListdialogVisible: {
      get() {
        return this.$store.state.order.imgListdialogVisible;
      },
      set(value) {
        this.$store.commit("order/setImgListdialogVisible", value);
      }
    }
  },
  methods: {
    ...mapMutations(["setImgListdialogVisible"]),
    returnImageName(name) {
      this.setImgListdialogVisible(false);
      this.obj.referenceMap = name;
    }
  },
  watch: {
    type() {
      const { type } = this;
      getImageList({ search: { type } }).then(data => {
        if (data.status === 1) {
          this.imageList = data.list;
        }
      });
    }
  },
  created() {
    const { type } = this;
    getImageList({ search: { type } }).then(data => {
      if (data.status === 1) {
        this.imageList = data.list;
      }
    });
  }
};
</script>

<style scoped>
li {
  text-align: center;
}
li > img {
  width: 130px;
  height: 130px;
  cursor: pointer;
}
.remark {
  display: inline-block;
  width: 100%;
  height: 20px;
  font-size: 12px;
  color: #888888;
}
</style>
