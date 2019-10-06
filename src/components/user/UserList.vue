<template>
  <el-table :data="userList" stripe style="width:100%;margin-top:15px;">
    <el-table-column prop="create_time" label="创建时间" width="180" align="center"></el-table-column>
    <el-table-column prop="account" label="账号" width="180" align="center"></el-table-column>
    <el-table-column prop="true_name" label="姓名" align="center"></el-table-column>
    <el-table-column prop="phone" label="手机号码" align="center"></el-table-column>
    <el-table-column prop="state" label="状态" align="center">
      <template slot-scope="scope">
        <span :class="rendClass(scope.row.state)">{{scope.row.state | formatSate}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button
          :disabled="scope.row.state !== 0"
          type="success"
          plain
          size="mini"
          @click="checkOperate(scope.row._id,1)"
        >通 过</el-button>
        <el-button
          :disabled="scope.row.state !== 0"
          type="danger"
          plain
          size="mini"
          @click="checkOperate(scope.row._id,2)"
        >驳 回</el-button>
        <el-button
          type="danger"
          plain
          size="mini"
          @click="deleteUser(scope.row._id)"
        >删 除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { putUser, deleteUser } from "@/api";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("user");
let loading = false;
export default {
  computed: {
    ...mapState(["userList"])
  },
  methods: {
    ...mapActions(["getUserList"]),
    rendClass(val) {
      switch (val) {
        case 0:
          return "warning";
        case 1:
          return "success";
        case 2:
          return "danger";
      }
    },
    // 审核操作
    checkOperate(id, val) {
      if (loading) {
        return;
      }

      this.$confirm(
        "此操作将通过/驳回该用户的申请,且后续不可修改,是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          loading = true;
          putUser(id, { state: val }).then(data => {
            loading = false;
            let type;
            if (data.status === 1) {
              type = "success";
              this.getUserList();
            } else {
              type = "error";
            }
            this.$message({
              message: data.message,
              type,
              customClass: "message-case"
            });
          });
        })
        .catch(() => {
          return;
        });
    },
    deleteUser(id) {
      if (loading) {
        return;
      }

      this.$confirm("此操作将删除该用户,且后续不可恢复,是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          loading = true;
          deleteUser(id).then(data => {
            loading = false;
            let type;
            if (data.status === 1) {
              type = "success";
              this.getUserList();
            } else {
              type = "error";
            }
            this.$message({
              message: data.message,
              type,
              customClass: "message-case"
            });
          });
        })
        .catch(() => {
          return;
        });
    }
  },
  filters: {
    formatSate(val) {
      switch (val) {
        case 0:
          return "待审核";
        case 1:
          return "已通过";
        case 2:
          return "被驳回";
      }
    }
  },
  created() {
    this.getUserList();
  }
};
</script>

<style>
</style>
