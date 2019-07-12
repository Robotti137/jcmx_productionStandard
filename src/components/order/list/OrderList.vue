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
        <el-button type="danger" plain size="mini" @click="deleteUser(scope.row._id)">删 除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getOrder } from "@/api";
export default {
  created() {
    getOrder().then(data => {
      console.log(data);
    });
  },
  data() {
    return {
      orderList: []
    };
  }
};
</script>

<style>
</style>
