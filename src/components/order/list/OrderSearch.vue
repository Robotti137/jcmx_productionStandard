<template>
  <div class="filter-container">
    <div>
      <el-input
        placeholder="项目名称"
        v-model="projectName"
        size="small"
        style="margin-right:10px;width:120px;"
      ></el-input>
      <el-button type="primary" size="small" @click="filter({projectName})">搜 索</el-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapMutations } = createNamespacedHelpers("order");
export default {
  data() {
    return {
      projectName: ""
    };
  },
  methods: {
    ...mapActions(["getOrderList"]),
    ...mapMutations(["setSearch", "setCurrentPage"]),
    filter(obj) {
      if (!obj.projectName) {
        delete obj.projectName;
      }
      this.setSearch(obj);
      this.setCurrentPage(1);
      this.getOrderList();
    }
  }
};
</script>

<style scoped>
.filter-container {
  display: flex;
  justify-content: flex-end;
  padding: 10px 22px 15px;
  border-bottom: 1px dashed #8d8787;
}
</style>
