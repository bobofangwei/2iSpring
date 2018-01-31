<template>
<div class="login-wrapper">
  <div class="form-wrapper">
    <el-form :model="formData" :rules="rules" ref="loginForm" class="demo-ruleForm">
      <div class="form-title">
        中国联通2I2C用户春节回乡信息查询
      </div>
      <el-form-item prop="username">
        <el-input v-model="formData.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" v-model="formData.password"></el-input>
      </el-form-item>
      <div class="form-submit">
        <el-button type="primary" class="login-btn" @click="submitLoginForm" :loading="loading">登录</el-button>
      </div>
    </el-form>
  </div>
</div>
</template>
<script type="text/javascript">
import md5 from 'md5';
export default {
  name: 'login',
  // created: function() {
  //     getUserInfo().then(() => {
  //         console.log('getUserInfo');
  //     });
  // },
  data: function() {
    var validPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'));
      } else if (value.length < 6) {
        callback(new Error('密码不能小于6位'));
      } else {
        callback();
      }
    };
    return {
      formData: {
        username: '',
        password: ''
      },
      loading: false,
      tipShow: false,
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          validator: validPass,
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    submitLoginForm: function() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          // 通过校验
          this.loading = true;
          // 分发登录请求
          this.$store.dispatch('login', {
            username: this.formData.username,
            password: md5(this.formData.password)
          }).then((res) => {
            this.loading = false;
            // 页面跳转
            // console.log('login tiaozhuan', res.token);
            this.$router.push({
              path: '/'
            });
          }).catch(error => {
            console.log('login.vue error', error);
            this.loading = false;
            // 将表单置为空
            // this.formData.username = '';
            // this.formData.password = '';
            // // 弹出登录失败的提示
            // this.$message({
            //   showClose: true,
            //   message: error.msg,
            //   type: 'error'
            // });
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scope>
@import "../../../common/scss/colors.scss";
.login-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: $light-black;
    .form-wrapper {
        background-color: #fff;
        width: 450px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
        border-radius: 10px;
        .form-title {
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
        }
        .el-form-item__content {
            line-height: 50px;
        }
        .forget-btn,
        .login-btn {
            width: 40%;
            text-align: center;
        }
        .login-btn {
            width: 100%;
        }
    }
}
</style>
