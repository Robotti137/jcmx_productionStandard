<template>
  <el-dialog width="70%" :visible.sync="imgListdialogVisible">
    <ul style=" display:flex;flex-wrap:wrap;overflow:auto;">
      <li v-for="(item,index) in imageList" :key="index">
        <img :src="requestUrl + '/upload/' + item.imgPath" :title="item.name" />
        <span class="remark">{{item.remark}}</span>
      </li>
    </ul>
    <a @click="test">13213213</a>
  </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("order");
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
    ...mapState(["type"]),
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
    test() {
      console.log(233);
    }
  },
  watch: {
    type(newValue, oldValue) {
      const { type } = this;
      getImageList({ search: { type } }).then(data => {
        if (data.status === 1) {
          this.imageList = data.list;
        }
      });
    }
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
