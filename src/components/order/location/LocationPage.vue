<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pagination.currentPage"
    :page-sizes="[10, 15, 20, 30]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pagination.total"
  ></el-pagination>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "locationOrder"
);
export default {
  computed: {
    ...mapState(["pagination"])
  },
  methods: {
    ...mapActions(["getOrderList"]),
    ...mapMutations(["setCurrentPage", "setRows"]),
    handleSizeChange(val) {
      this.setRows(val);
      this.setCurrentPage(1);
      this.getOrderList();
    },
    handleCurrentChange(val) {
      this.setCurrentPage(val);
      this.getOrderList();
    }
  }
};
</script>

<style>
</style>
