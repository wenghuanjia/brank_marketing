import axios from "axios";
import { host } from "./env.js";
import { removeStore, getStore } from "../common/common.js";

axios.defaults.timeout = 10000;

// 请求前拦截
axios.interceptors.request.use(
  (config) => {
    let token = getStore("token");
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers["XX-Token"] = `${token}`;
    }
    config.headers["XX-Device-Type"] = "web";
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";

    if (
      config.url.indexOf("http://") != -1 ||
      config.url.indexOf("https://") != -1
    ) {
      return config;
    }

    if (config.url.indexOf(host) === -1) {
      config.url = host + config.url; /*拼接完整请求路径*/
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 请求后拦截
axios.interceptors.response.use(
  (response) => {
    //当返回信息为未登录或者登录失效的时候重定向为登录页面
    if (response.data.status === 10001) {
      removeStore("br-token");
      removeStore("br-userInfo");
    }
    return response;
  },
  (error) => {
    if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") !== -1
    ) {
      console.log();
    }
    return Promise.reject(error);
  }
);

export default async (url = "", data = {}, method = "GET") => {
  method = method.toUpperCase();
  var obj = {};

  if (method == "GET") {
    obj.params = data;
  } else if (method == "POST") {
    obj.data = data;
  }

  obj.method = method;
  obj.url = url;

  return new Promise((resolve, reject) => {
    axios(obj)
      .then((response) => {
        if (response.status == 200) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
