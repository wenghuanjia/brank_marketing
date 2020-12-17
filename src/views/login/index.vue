<template>
  <userLayout title="登录">
    <div class="login-form">
      <van-form
        @submit="onSubmit"
        @failed="onFailed"
        validate-first
        ref="login-form"
        label-width="30px"
        :show-error-message="false"
        :show-error="false"
      >
        <van-field
          left-icon="phone-o"
          v-model="username"
          maxlength="11"
          name="username"
          placeholder="手机号"
          clearable
          :rules="formRules.username"
        >
        </van-field>
        <van-field
          v-model="password"
          type="password"
          name="password"
          left-icon="eye-o"
          placeholder="密码"
          clearable
          :rules="formRules.password"
        />
        <div class="btn">
          <van-button native-type="submit" type="primary" size="large">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="box-ctrl">
      <p @click="handleBack('/register')">注册账号</p>
      <p @click="handleBack('/forget')">忘记密码？</p>
    </div>
  </userLayout>
</template>

<script>
import userLayout from "../../components/user-layout";
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default defineComponent({
  name: "LoginIndex",
  setup() {
    const user = reactive({
      username: "",
      password: "",
      formRules: {
        username: [
          { required: true, message: "请输入手机号" },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: "手机号格式错误" },
        ],
        password: [{ required: true, message: "请输入密码" }],
      },
    });

    const router = useRouter();
    // 通过验证
    const onSubmit = (values) => {
      console.log(values);
      Toast({
        message: "登录中...",
        position: "top",
      });
    };
    // 表单验证 不通过时 触发
    const onFailed = (error) => {
      if (error.errors[0]) {
        Toast({
          message: error.errors[0].message,
          position: "top",
        });
      }
    };
    const handleBack = (url) => {
      router.push(url);
    };
    return { ...toRefs(user), onSubmit, handleBack, onFailed };
  },
  components: {
    userLayout,
  },
});
</script>

<style lang="less" scoped>
.login-form {
  padding: 20px 30px;
  /deep/ .van-cell {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
.btn {
  /deep/ button {
    margin: 30px 0;
    height: 40px !important;
    background: #69a5ff;
    border: 1px solid #69a5ff !important;
  }
}
.box-ctrl {
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
}
</style>