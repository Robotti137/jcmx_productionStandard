<template>
  <el-table :data="orderList" stripe style="width:100%;margin-top:15px;">
    <el-table-column prop="creatDate" label="创建时间" width="140" align="center"></el-table-column>
    <el-table-column prop="documentNumber" label="文档编号" align="center"></el-table-column>
    <el-table-column prop="projectName" label="项目名称" align="center"></el-table-column>
    <el-table-column prop="orderDate" label="下单日期" width="100" align="center"></el-table-column>
    <el-table-column prop="completeDate" label="完成日期" width="100" align="center"></el-table-column>
    <el-table-column prop="projectPrincipal" label="项目节点总负责人" width="140" align="center"></el-table-column>
    <el-table-column prop="projectPlanner" label="项目策划人" width="100" align="center"></el-table-column>
    <el-table-column prop="salesman" label="业务员" width="80" align="center"></el-table-column>
    <el-table-column prop="projectAddress" label="项目地址" align="center"></el-table-column>
    <el-table-column label="操作" fixed="right" width="210" align="center">
      <template slot-scope="scope">
        <el-button type="primary" plain size="mini" @click="viewTable(scope.row)">查看</el-button>
        <el-button
          type="success"
          plain
          size="mini"
          @click="setOrderUpdateDialogVisible(true);setOrder(scope.row)"
        >修改</el-button>
        <el-button type="danger" plain size="mini" @click="deleteOrder(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("order");
import { deleteOrder } from "@/api";
let loading = false;
export default {
  created() {
    this.getOrderList();
  },
  computed: {
    ...mapState(["orderList"])
  },
  methods: {
    ...mapActions(["getOrderList"]),
    ...mapMutations(["setOrderUpdateDialogVisible", "setOrder"]),
    deleteOrder(id) {
      if (loading) {
        return;
      }

      this.$confirm("此操作将删除此开工单,且后续不可恢复,是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          loading = true;
          deleteOrder(id).then(data => {
            loading = false;
            let type;
            if (data.status === 1) {
              type = "success";
              this.getOrderList();
            } else {
              type = "error";
            }
            this.$message({
              message: data.message,
              type
            });
          });
        })
        .catch(() => {
          return;
        });
    },
    viewTable(data) {
      sessionStorage.setItem("order", JSON.stringify(data));
      window.open("/order/project/template");
    }
  }
};
</script>

<style>
</style>
