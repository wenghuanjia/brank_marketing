<template>
  <div class="scan">
    <div class="header">
      <img
        src="http://www.ky200.com/api/file/showImg/1293036387491885058"
        class="header-img"
      />
      <div class="enterprise-msg">
        <p class="name">板城酒业集团</p>
        <p class="state"><van-icon name="gem-o" />认证企业</p>
      </div>
      <span class="follow-no">关注</span>
    </div>
    <div class="picModel">
      <img
        src="http://www.ky200.com/api/file/showImg/1293086161033211906"
        alt=""
      />
    </div>
    <div class="Video">
      <video
        src="https://opensources-oss.oss-cn-shenzhen.aliyuncs.com/605389a3-9d80-4607-ae11-642918b08725.mp4"
        poster="https://opensources-oss.oss-cn-shenzhen.aliyuncs.com/605389a3-9d80-4607-ae11-642918b08725.mp4?x-oss-process=video/snapshot,t_4000,f_jpg,w_0,h_0,m_fast"
        controls="controls"
        width="100%"
        preload="auto"
        style="vertical-align: bottom; height: 6rem"
      ></video>
    </div>
    <div class="picModel">
      <img
        src="http://www.ky200.com/api/file/showImg/1293089333684449282"
        alt=""
      />
    </div>
    <div class="picModel">
      <img
        src="http://www.ky200.com/api/file/showImg/1293097334797479937"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ScanIndex",
  setup() {},
});
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
