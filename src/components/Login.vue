<template>
  <div class="login-container">
    <div class="form-container">
      <div class="manage-tip">
        <p style="font-size:36px;color:#fff;">精诚模型制作标准管理</p>
      </div>
      <el-form :model="loginInfo" :rules="rules" ref="loginForm">
        <el-form-item prop="account">
          <el-input type="text" placeholder="账号" v-model="loginInfo.account"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="loginInfo.password"></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:10px;">
          <el-button type="primary" style="width:100%;" @click="loginUser">登录</el-button>
        </el-form-item>
      </el-form>
      <p style="text-align:right;">
        <a class="register-btn" @click="jumpRegister">未拥有账号？</a>
      </p>
    </div>
  </div>
</template>

<script>
import { accountReg, passwordReg } from "@/utils/reg";
import { login } from "@/api";
let loading = false;
export default {
  data() {
    // 验证账号格式
    let validAccount = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请填写账号"));
      } else if (!accountReg.test(value)) {
        callback(new Error("账号不符合规则，4-16位支持数字字母_-"));
      } else {
        callback();
      }
    };
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
    return {
      loginInfo: {
        account: "",
        password: ""
      },
      //验证规则
      rules: {
        account: [{ validator: validAccount, trigger: "blur" }],
        password: [{ validator: validPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 跳转至注册页
    jumpRegister() {
      this.$router.replace("/register");
    },
    loginUser() {
      if (loading) {
        return;
      }

      let { loginForm } = this.$refs;

      loginForm.validate(valid => {
        if (!valid) {
          return;
        }

        let sendData = { ...this.loginInfo };

        loading = true;
        login(sendData).then(data => {
          loading = false;
          let type;
          if (data.status === 1) {
            type = "success";
            this.$router.replace("/manage/index");
          } else {
            type = "error";
          }
          this.$message({
            message: data.message,
            type,
            customClass: "prompt"
          });
        });
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-color: #324057;
}

.form-container {
  width: 320px;
  height: 190px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -140px;
  margin-left: -185px;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
}

.manage-tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
}

.register-btn {
  font-size: 14px;
  color: #409eff;
  cursor: pointer;
}
.register-btn:hover {
  text-decoration: underline;
}

.prompt {
  width: 100px;
}
</style>
