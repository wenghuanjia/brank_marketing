import axios from "@/service/axios.js";

// 获取首页 数据
export const reqHomeData = (keywords) =>
  axios(`/diy/fieldbigtwo/details?keywords=${keywords}`);
