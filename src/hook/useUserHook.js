import qs from "qs";
import { reqCode } from "@/api/user";
import { Toast } from "vant";
// 获取 验证码
export async function useReqCode(username, codeTxt) {
  if (!codeTxt.value.includes("获取验证码")) return;
  let res = await reqCode(qs.stringify({ username }));
  if (res.status === 1) {
    Toast("验证码已发送，请留意手机");
    let time = 30;
    let timer = setInterval(() => {
      time--;
      codeTxt.value = `${time} 秒后重新发送`;
      if (time === 0) {
        codeTxt.value = "重新获取验证码";
        clearInterval(timer);
      }
    }, 1000);
  } else {
    Toast(res.msg);
  }
}
