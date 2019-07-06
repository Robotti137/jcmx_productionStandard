<template>
  <div class="login-container">
    <div class="form-container">
      <div class="manage-tip">
        <p style="font-size:36px;color:#fff;">用户注册</p>
      </div>
      <el-form :model="registerInfo" :rules="rules" ref="registerForm">
        <el-form-item prop="account">
          <el-input type="text" placeholder="账号" v-model="registerInfo.account"></el-input>
        </el-form-item>
        <el-form-item prop="true_name">
          <el-input type="text" placeholder="姓名" v-model="registerInfo.true_name"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input type="text" placeholder="手机号码" v-model="registerInfo.phone"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="registerInfo.password"></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input type="password" placeholder="确认密码" v-model="registerInfo.confirmPassword"></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:10px;">
          <el-button type="primary" style="width:100%;" @click="registerUser">提交</el-button>
        </el-form-item>
      </el-form>
      <p style="text-align:right;">
        <a class="register-btn" @click="jumpLogin">已拥有账号？</a>
      </p>
      <p class="remind" style="margin-top:10px;">温馨提示：</p>
      <p class="remind">注册之后需要超级管理员审核通过才可登录</p>
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
            type
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
  height: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -230px;
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

.remind {
  font-size: 12px;
  color: red;
}
</style>
