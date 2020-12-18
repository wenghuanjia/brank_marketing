import { createStore } from "vuex";
import { removeStore, setStore } from "../common/common";

export default createStore({
  state: {
    user: null,
    isLogin: false,
    token: "",
  },
  mutations: {
    // 登录 设置 用户 信息
    loginSetUserInfo(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
      setStore("token", payload.token);
      setStore("isLogin", true);
      setStore("user", payload.user);
    },
    // 退出登录
    logout(state) {
      state.user = null;
      state.token = "";
      state.isLogin = false;
      removeStore("token");
      removeStore("isLogin");
      removeStore("user");
    },
  },
  actions: {},
  modules: {},
});
