<template>
  <div class="login-register-background" style="box-sizing:border-box;padding-top:160px;">
    <div class="login-register-region" style="margin: 0 auto;height:480px;">
      <p class="title-login">注册</p>
      <el-form :model="registerInfo" :rules="rules" ref="registerForm">
        <el-form-item prop="account">
          <el-input
            class="round-input"
            size="small"
            type="text"
            placeholder="账号"
            v-model="registerInfo.account"
          ></el-input>
        </el-form-item>
        <el-form-item prop="true_name">
          <el-input
            type="text"
            size="small"
            v-model="registerInfo.true_name"
            class="round-input"
            placeholder="真实姓名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input
            type="tel"
            class="round-input"
            size="small"
            placeholder="手机号码"
            v-model="registerInfo.phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            size="small"
            class="round-input"
            placeholder="密码"
            v-model="registerInfo.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input
            type="password"
            size="small"
            class="round-input"
            placeholder="确认密码"
            v-model="registerInfo.confirmPassword"
          ></el-input>
        </el-form-item>
        <el-form-item style="margin:10px 0;">
          <el-button type="primary" class="login-btn" round @click="registerUser">提 交</el-button>
        </el-form-item>
      </el-form>
      <p style="text-align:right;">
        <a class="register-btn" @click="jumpLogin">已拥有账号？</a>
      </p>
      <p class="remind center" style="margin-top:10px;">温馨提示：</p>
      <p class="remind center">注册之后需要超级管理员审核通过才可登录</p>
    </div>
  </div>
</template>

<script>
import { register } from "@/api";
import { accountReg, passwordReg, trueNameReg, phone } from "@/utils/reg";
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
    // 验证姓名（汉字）
    let validTrueName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请填写姓名"));
      } else if (trueNameReg.test(value)) {
        callback(new Error("姓名不符合规则，只支持汉字"));
      } else {
        callback();
      }
    };
    // 确认密码
    let validConfirmPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请填写密码"));
      } else if (this.registerInfo.password !== value) {
        callback(new Error("密码不一致"));
      } else {
        callback();
      }
    };
    // 手机号码
    let validPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请填写手机号码"));
      } else if (!phone.test(value)) {
        callback(new Error("请填写正确的手机号码"));
      } else {
        callback();
      }
    };
    return {
      registerInfo: {
        account: "",
        true_name: "",
        phone: "",
        password: "",
        confirmPassword: "",
        permission: 2
      },
      //验证规则
      rules: {
        account: [{ validator: validAccount, trigger: "blur" }],
        password: [{ validator: validPassword, trigger: "blur" }],
        true_name: [{ validator: validTrueName, trigger: "blur" }],
        confirmPassword: [{ validator: validConfirmPassword, trigger: "blur" }],
        phone: [{ validator: validPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 跳转至登录页
    jumpLogin() {
      this.$router.replace("/login");
    },
    // 用户注册
    registerUser() {
      if (loading) {
        return;
      }
      let { registerForm } = this.$refs;
      registerForm.validate(valid => {
        if (!valid) {
          return;
        }

        let sendData = { ...this.registerInfo };
        delete sendData.confirmPassword;
        sendData.state = 0; //审核状态

        loading = true;
        register(sendData).then(data => {
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
            customClass: "message-case"
          });
        });
      });
    }
  }
};
</script>

<style scoped>
.login-register-background {
  height: 100%;
  background: url("../../static/img/background_img1.png") no-repeat center top;
  background-size: 100% 100%;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
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

.title-cn_name {
  padding-top: 70px;
  font-size: 30px;
}

.title-en_name {
  margin-top: 16px;
  font-size: 18px;
}

.side-picture {
  z-index: 100;
  padding: 7px;
  background-color: #fff;
  font-size: 0;
  box-shadow: 4px -4px 4px rgba(40, 137, 238, 0.3);
}

.login-register-region {
  box-sizing: border-box;
  width: 350px;
  height: 300px;
  padding: 20px 40px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
}

.title-login {
  margin: 10px 0;
  text-align: center;
  font-size: 18px;
  color: #2889ee;
}

.register-btn {
  font-size: 14px;
  color: #409eff;
  cursor: pointer;
}

.register-btn:hover {
  text-decoration: underline;
}

.remind {
  font-size: 12px;
  color: red;
}
.center {
  text-align: center;
}
</style>
