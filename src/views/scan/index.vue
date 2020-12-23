<template>
  <div class="scan" v-if="!isNo">
    <div class="header" v-if="data.logo">
      <img :src="data.logo" class="header-img" />
      <div class="enterprise-msg">
        <p class="name">{{ data.qiye_name }}</p>
        <p class="state"><van-icon name="gem-o" />认证企业</p>
      </div>
      <span class="follow-no">关注</span>
    </div>
    <!-- <div class="picModel">
      <img :src="data.logo" alt="" />
    </div> -->
    <div class="Video" v-if="data.video_url">
      <video
        :src="data.video_url"
        controls="controls"
        width="100%"
        preload="auto"
        style="vertical-align: bottom; height: 6rem; width: 100%"
      ></video>
    </div>
    <div class="picModel" v-if="data.product_details">
      <img :src="data.product_details" alt="" />
    </div>
    <div class="picModel" v-if="data.product_details_bottom">
      <img :src="data.product_details_bottom" alt="" />
    </div>
  </div>
  <nothing description="未注册，暂无资讯信息" v-else />
</template>

<script>
import { Toast } from "vant";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { reqHomeData } from "@/api/home";
import { setStore, getStore } from "@/common/common";
import nothing from "@/components/nothing";

export default {
  name: "ScanIndex",
  setup() {
    const data = ref({});
    const isNo = ref(false);
    const route = useRoute();
    const keywords = route.query.mobile || JSON.parse(getStore("keywords"));
    if (keywords) {
      setStore("keywords", JSON.stringify(keywords));
    }
    // 获取 首页 数据
    const _getHomeData = async () => {
      if (!keywords) {
        isNo.value = true;

        // Toast("请先注册");
        return;
      }
      let res = await reqHomeData(keywords);
      if (res.status === 1) {
        data.value = res.data.list;
        let oKey = Object.keys(res.data.list);
        let emptyLen = 0;
        for (const key in res.data.list) {
          if (!res.data.list[key]) {
            emptyLen++;
          }
        }
        if (emptyLen == oKey.length - 2) {
          isNo.value = true;
        } else {
          isNo.value = false;
        }
      } else {
        Toast(res.msg);
      }
    };
    onMounted(() => {
      _getHomeData();
    });
    return {
      data,
      isNo,
    };
  },
  components: {
    nothing,
  },
};
</script>

<style lang="less" scoped>
.scan {
  background-color: #fff;
  margin-bottom: 50px;
  .header {
    width: 100%;
    padding: 0.56rem 0.426667rem;
    box-sizing: border-box;
    display: flex;
    position: relative;
    .header-img {
      width: 1.44rem;
      height: 1.44rem;
      border-radius: 50%;
    }
    .enterprise-msg {
      position: relative;
      width: 7.786667rem;
      margin-left: 0.32rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .name {
        font-size: 0.4rem;
        color: #333;
        font-weight: 600;
        line-height: 0.506667rem;
        width: 6.133333rem;
      }
      .state {
        display: flex;
        align-items: center;
        color: #f9c600;
        font-size: 0.32rem;
        i {
          font-size: 0.32rem;
          margin-right: 0.106667rem;
        }
      }
    }
    .follow-no {
      color: #69a5ff;
    }
  }
  .picModel {
    width: 100vw;
    img {
      width: 100%;
    }
  }
  .Video {
    width: 100%;
    position: relative;
    box-sizing: border-box;
  }
}
</style>
