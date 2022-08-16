<template>
  <div class="Login__warp">
    <div class="login-form-card">
      <a-form-model
          ref="loginForm"
          :model="loginForm"
          :rules="formRules"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
      >
        <a-form-model-item label="用户名" prop="username">
          <a-input
              v-model="loginForm.username"
              placeholder="手机号或邮箱"
          />
        </a-form-model-item>
        <a-form-model-item label="密码" prop="password">
          <a-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
          />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 16, offset: 4 }">
          <a-button type="primary" @click="onSubmit">
            Create
          </a-button>
          <a-button style="margin-left: 10px;" @click="resetForm">
            Reset
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' },
        ],
        password: [
          { required: true, message: '请输入用密码', trigger: 'change' },
          { min: 6, message: '密码长度不能小于6', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert('submit!');
        }
      });
    },
    resetForm() {
      this.$refs.loginForm.resetFields();
    },
  }
}
</script>

<style lang="scss" scoped>
.Login__warp {
  width: 100%;
  height: 100%;
  background-color: #f4f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form-card {
    width: 580px;
    background-color: #ffffff;
    padding: 50px 0;
  }
}
</style>
