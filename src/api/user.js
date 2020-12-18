import axios from "@/service/axios";

// 登录 接口
export const login = (data) => axios("/user/public/login", data, "POST");

// 注册 接口
export const register = (data) => axios("/user/public/register", data, "POST");

// 忘记密码 接口
export const forgetPwd = (data) =>
  axios("/user/public/passwordReset", data, "POST");

// 获取 验证码
export const reqCode = (data) => axios("/user/verification/send", data, "POST");
