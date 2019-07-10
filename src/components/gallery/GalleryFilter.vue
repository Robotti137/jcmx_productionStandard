<template>
  <div>
    <el-select v-model="type" size="small" style="margin-right:10px;width:150px;">
      <el-option label="全部" value></el-option>
      <el-option label="建筑" :value="1"></el-option>
      <el-option label="景观" :value="2"></el-option>
      <el-option label="绿化" :value="3"></el-option>
      <el-option label="户型" :value="4"></el-option>
      <el-option label="区位" :value="5"></el-option>
      <el-option label="底座" :value="6"></el-option>
    </el-select>
    <el-button type="primary" size="small" @click="filterImage">筛 选</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions } = createNamespacedHelpers("gallery");
export default {
  data() {
    return {
      type: ""
    };
  },
  methods: {
    ...mapMutations(["setSearch", "setImageList", "setCurrentPage"]),
    ...mapActions(["getImageList"]),
    filterImage() {
      if (this.type === '') {
        this.setSearch({});
      } else {
        this.setSearch({ type: this.type });
      }
      this.setImageList([]);
      this.setCurrentPage(1);
      this.getImageList();
    }
  }
};
</script>

<style>
</style>
