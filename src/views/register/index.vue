<template>
  <userLayout title="注册会员">
    <div class="login-form">
      <van-form
        autocomplete="off"
        @submit="onSubmit"
        @failed="onFailed"
        label-width="60px"
        validate-first
        ref="loginForm"
        :show-error-message="false"
        :show-error="false"
      >
        <van-field
          label="手机号"
          v-model="username"
          maxlength="11"
          name="username"
          placeholder="手机号"
          clearable
          :rules="formRules.username"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          clearable
          :rules="formRules.password"
        />
        <van-field
          v-model="confirmPwd"
          type="password"
          name="confirmPwd"
          label="确认密码"
          placeholder="确认密码"
          clearable
          :rules="formRules.confirmPwd"
        />
        <van-field
          v-model="code"
          name="code"
          label="验证码"
          placeholder="验证码"
          clearable
          :rules="formRules.code"
        >
          <template #button>
            <span :class="isCode ? 'code' : 'pointer'" @click="handleCode">{{
              codeTxt
            }}</span>
          </template>
        </van-field>
        <div class="btn">
          <van-button
            type="primary"
            :loading="loading"
            loading-text="注册..."
            native-type="submit"
            size="large"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="box-ctrl">
      <p @click="handleBack">前往登录</p>
    </div>
  </userLayout>
</template>

<script>
import qs from "qs";
import { register } from "@/api/user";
import { useReqCode } from "../../hook/useUserHook";
import userLayout from "@/components/user-layout";
import { reactive, ref, toRefs, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Toast } from "vant";
export default {
  name: "RegisterIndex",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const validator = () => {
      if (user.password !== user.confirmPwd) return false;
    };
    const loading = ref(false);
    const codeTxt = ref("获取验证码");
    const user = reactive({
      username: "",
      password: "",
      confirmPwd: "",
      code: "",
      isCode: false,
      formRules: {
        username: [
          { required: true, message: "请输入手机号" },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: "手机号格式错误" },
        ],
        password: [{ required: true, message: "请输入密码" }],
        confirmPwd: [
          { required: true, message: "请输入确认密码" },
          { validator, message: "两次密码输入不一致" },
        ],
        code: [{ required: true, message: "请输入验证码" }],
      },
    });
    watch(
      () => user.username,
      (newV) => {
        if (/^1[3|5|7|8|9]\d{9}$/.test(newV)) {
          user.isCode = true;
        } else {
          user.isCode = false;
        }
      }
    );
    // 提交按钮 事件
    const onSubmit = (values) => {
      Toast.loading({
        message: "",
        forbidClick: true,
      });
      let data = {
        username: values.username,
        password: values.password,
        verification_code: values.code,
      };
      handleRegister(data, loading, handleBack);
    };
    const handleBack = () => {
      router.push({
        path: "/login",
        query: route.query,
      });
    };
    // 获取 验证码
    const handleCode = () => {
      Toast.loading({
        message: "",
        forbidClick: true,
      });
      useReqCode(user.username, codeTxt);
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
    return {
      handleBack,
      onSubmit,
      onFailed,
      handleCode,
      codeTxt,
      loading,
      ...toRefs(user),
    };
  },
  components: {
    userLayout,
  },
};
// 注册
async function handleRegister(data, loading, handleBack) {
  if (loading.value) return;
  try {
    let res = await register(qs.stringify(data));
    Toast({
      message: res.msg,
      position: "top",
    });
    if (res.status === 1) {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        typeof handleBack === "function" && handleBack();
      }, 1000);
    }
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
}
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
    margin-top: 30px;
    height: 40px !important;
    background: #69a5ff;
    border: 1px solid #69a5ff !important;
  }
}
.box-ctrl {
  padding: 0 30px;
  display: flex;
  justify-content: center;
  color: #999;
  font-size: 14px;
}
.code {
  color: #69a5ff;
}
</style>