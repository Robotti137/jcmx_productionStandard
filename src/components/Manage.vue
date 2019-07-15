<template>
  <el-container style="height:100%;">
    <el-aside width="200px" style="background-color:#324057;">
      <el-menu
        :default-active="$route.path"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#20a0ff"
        router
        :collapse="false"
      >
        <el-menu-item index="/manage/index">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/manage/user" v-if="userInfo.permission === 1">
          <i class="el-icon-s-custom"></i>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/manage/gallery" v-if="userInfo.permission === 1">
          <i class="el-icon-picture"></i>
          <span>图库管理</span>
        </el-menu-item>
        <el-submenu index="order">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>项目制作单</span>
          </template>
          <el-menu-item index="/manage/order/project">项目开工单</el-menu-item>
          <el-menu-item index="/manage/order/house">户型开工单</el-menu-item>
          <el-menu-item index="/manage/order/location">区位开工单</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header-container">
        <el-breadcrumb separator="/">
          <template v-for="(value, name) in breadcrumb">
            <el-breadcrumb-item :to="{path:value}" :key="value">{{name}}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
        <p style="position:absolute;left:50%;font-size:18px;font-weight:bold;">精诚模型制作标准管理系统</p>
        <el-dropdown>
          <img src="../../static/img/default.jpg" class="avator el-dropdown-link" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="changePwdDialogVisible = true">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logoutUser">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main style="padding:0;">
        <router-view></router-view>
      </el-main>
    </el-container>

    <!-- 修改密码弹框 -->
    <el-dialog title="修改密码" :visible.sync="changePwdDialogVisible" width="25%">
      <el-form :model="passwordForm" :rules="rules" ref="passwordForm">
        <el-form-item prop="oldPassword">
          <el-input type="password" placeholder="旧密码" v-model="passwordForm.oldPassword"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input type="password" placeholder="新密码" v-model="passwordForm.newPassword"></el-input>
        </el-form-item>
        <el-form-item prop="confirmNewPassword">
          <el-input type="password" placeholder="确认新密码" v-model="passwordForm.confirmNewPassword"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="changePassword">保 存</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("common");
import { logout, changePassword, getUserInfo } from "@/api";
import { passwordReg } from "@/utils/reg";
let loading = false;
export default {
  data() {
    // 验证密码格式
    let validPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请填写密码"));
      } else if (!passwordReg.test(value)) {
        callback(new Error("密码不符合规则，6-16位支持数字字母_-"));
      } else {
        callback();
      }
    };
    // 确认密码
    let validConfirmPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请填写密码"));
      } else if (this.passwordForm.newPassword !== value) {
        callback(new Error("密码不一致"));
      } else {
        callback();
      }
    };
    return {
      breadcrumb: {},
      changePwdDialogVisible: false,
      passwordForm: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      },
      //验证规则
      rules: {
        oldPassword: [{ validator: validPassword, trigger: "blur" }],
        newPassword: [{ validator: validPassword, trigger: "blur" }],
        confirmNewPassword: [
          { validator: validConfirmPassword, trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapMutations(["setUserInfo"]),
    logoutUser() {
      if (loading) {
        return;
      }
      loading = true;
      logout().then(data => {
        loading = false;
        if (data.status === 1) {
          this.$router.replace("/login");
          this.$message({
            message: data.message,
            type: "success",
            customClass: "top"
          });
        }
      });
    },
    changePassword() {
      if (loading) {
        return;
      }
      const { passwordForm } = this.$refs;
      passwordForm.validate(valid => {
        if (!valid) {
          return;
        }

        let { oldPassword, newPassword } = this.passwordForm;

        loading = true;
        changePassword({ oldPassword, newPassword }).then(data => {
          loading = false;
          let type;
          if (data.status === 1) {
            type = "success";
            this.$router.replace("/login");
          } else {
            type = "error";
          }
          this.$message({
            message: data.message,
            type,
            customClass: "top"
          });
        });
      });
    }
  },
  watch: {
    $route(to) {
      this.breadcrumb = to.meta;
    }
  },
  created() {
    this.breadcrumb = this.$route.meta;
    getUserInfo().then(data => {
      if (data.status === 1) {
        this.setUserInfo(data.userInfo);
      }
    });
  }
};
</script>

<style>
.header-container {
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}

.el-aside {
  color: #333;
}

.el-menu {
  border: none;
}

.el-breadcrumb {
  font-size: 13px;
  color: #97a8be;
}

.success {
  color: #67c23a;
}

.warning {
  color: #e6a23c;
}

.danger {
  color: #f56c6c;
}

.el-pagination {
  margin: 30px 0;
  text-align: center;
}

.avator {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.top {
  top: 64px !important;
  left: 52%;
}
</style>
