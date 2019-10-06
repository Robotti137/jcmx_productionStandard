<template>
  <div class="login-background">
    <p class="title" style="padding-top:70px;font-size:30px;">精诚模型智慧云平台</p>
    <p class="title" style="margin-top:16px;font-size:18px;">KingSun Production Standard management</p>
    <div class="login-container">
      <div
        style="z-index:100;padding:7px;background-color:#fff;font-size:0;box-shadow:4px -4px 4px rgba(40,137,238,.3);"
      >
        <img src="../../static/img/login_img.png" style="width:360px;height:280px;" />
      </div>
      <div
        style="box-sizing:border-box;width:350px;height:270px;padding:20px 40px;background-color:#fff;border:1px solid #e4e4e4"
      >
        <p style="margin:10px 0;text-align:center;font-size:18px;color:#2889ee;">登录</p>
        <el-form :model="loginInfo" :rules="rules" ref="loginForm">
          <el-form-item prop="account">
            <el-input
              size="small"
              prefix-icon="el-icon-user"
              type="text"
              placeholder="账号"
              v-model="loginInfo.account"
              class="round-input"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginInfo.password"
              size="small"
              placeholder="密码"
              prefix-icon="el-icon-lock"
              class="round-input"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginUser" class="login-btn" round size="small">登 录</el-button>
          </el-form-item>
          <p style="text-align:right;">
            <a class="register-btn" @click="jumpRegister">未拥有账号？</a>
          </p>
        </el-form>
      </div>
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
            customClass: "message-case"
          });
        });
      });
    }
  }
};
</script>

<style scoped>
.login-background {
  height: 100%;
  background: url("../../static/img/background_img1.png") no-repeat center top;
  background-size: 100% 100%;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8%;
}

.title {
  margin: 0;
  text-align: center;
  color: #2889ee;
}

.box-card {
  background-color: rgba(255, 255, 255, 0.8);
}

.login-input {
  width: 200px;
}

.login-btn {
  width: 100%;
}

.login-title {
  margin: 0 0 16px 0;
  text-align: center;
}

.el-form-item {
  margin-bottom: 14px;
}

.el-input__icon {
  color: black;
}

.register-btn {
  font-size: 14px;
  color: #409eff;
  cursor: pointer;
}

.register-btn:hover {
  text-decoration: underline;
}
</style>
