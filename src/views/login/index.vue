<template>
  <userLayout title="登录">
    <div class="login-form">
      <van-form
        autocomplete="off"
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
          <van-button
            native-type="submit"
            type="primary"
            size="large"
            :loading="loading"
            loading-text="登录..."
          >
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="box-ctrl">
      <p @click="handleJump('/register')">注册账号</p>
      <p @click="handleJump('/forget')">忘记密码？</p>
    </div>
  </userLayout>
</template>

<script>
import { Toast } from "vant";
import qs from "qs";
import { login } from "@/api/user";
import userLayout from "@/components/user-layout";
import { useStore } from "vuex";
import { reactive, ref, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "LoginIndex",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { commit } = useStore();
    const loading = ref(false);
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

    // 通过验证
    const onSubmit = (values) => {
      if (loading.value) return;
      Toast("登录中...");
      loading.value = true;
      useLogin(values, loading, commit, route, router);
    };
    // 表单验证 不通过时 触发
    const onFailed = (error) => {
      if (error.errors[0]) {
        Toast(error.errors[0].message);
      }
    };
    const handleJump = (url) => {
      router.push({
        path: url,
        query: route.query,
      });
    };
    return { ...toRefs(user), onSubmit, handleJump, onFailed, loading };
  },
  components: {
    userLayout,
  },
};

async function useLogin(data, loading, commit, route, router) {
  const res = await login(qs.stringify({ ...data, device_type: "mobile" }));
  loading.value = false;
  if (res.status === 1) {
    Toast(res.msg);
    commit("loginSetUserInfo", res.data);
    route?.query?.redirect ? router.push(route.query.redirect) : router.back();
  } else {
    Toast(res.msg);
  }
}
</script>

<style lang="less" scoped>
.login-form {
  padding: 20px 30px;
  :deep(.van-cell) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  :deep(.van-popup) {
    background: none !important;
  }
}
.btn {
  :deep(button) {
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