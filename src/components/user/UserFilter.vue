<template>
  <div class="filter-container">
    <div>
      <span style="font-size:13px;color:#8d8787;">筛选：</span>
      <el-button type="warning" size="small" @click="filter({state:0})">待审核的</el-button>
      <el-button type="success" size="small" @click="filter({state:1})">已通过的</el-button>
      <el-button type="danger" size="small" @click="filter({state:2})">被驳回的</el-button>
      <el-button type="primary" size="small" @click="filter({})">全 部</el-button>
    </div>
    <div>
      <el-input
        placeholder="姓名"
        v-model="true_name"
        size="small"
        style="margin-right:10px;width:120px;"
      ></el-input>
      <el-button type="primary" size="small" @click="filter({true_name})">搜 索</el-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapMutations } = createNamespacedHelpers("user");
export default {
  data() {
    return {
      true_name: ""
    };
  },
  methods: {
    ...mapActions(["getUserList"]),
    ...mapMutations(["setSearch", "setCurrentPage"]),
    filter(obj) {
      if (!obj.true_name) {
        delete obj.true_name;
      }
      this.setSearch(obj);
      this.setCurrentPage(1);
      this.getUserList();
    }
  }
};
</script>

<style scoped>
.filter-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 22px 15px;
  border-bottom: 1px dashed #8d8787;
}
</style>
