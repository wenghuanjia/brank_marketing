<template>
  <div class="shop_detail">
    <div class="picModel">
      <img src="http://www.ky200.com/api/file/showImg/1293086161033211906" />
    </div>
    <div class="Video">
      <h5>板城和顺1975</h5>
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
    <div class="stockout">
      <p class="s1">该产品暂时缺货</p>
      <p class="s2">请前往查看更多产品吧～！</p>
    </div>
    <div class="footer-buy">
      <div class="ctrl">
        <van-icon name="arrow-left" class="cubeic-back" @click="back" />
        <p class="price"><span class="price-text">金额：¥</span>168</p>
        <div class="collect">
          <van-icon name="star-o" />
          <p>收藏</p>
        </div>
      </div>
      <div class="button-buy button-but-no">立即购买</div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ShopDetailIndex",
  setup() {
    const router = useRouter();
    const back = () => {
      router.back();
    };
    return {
      back,
    };
  },
};
</script>

<style lang="less" scoped>
.shop_detail {
  padding-bottom: 90px;
}
.Video {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  h5 {
    height: 0.6rem;
    line-height: 0.6rem;
    text-indent: 1em;
    font-size: 0.28rem;
    width: 100%;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    // position: absolute;
    top: 0;
  }
}
.picModel {
  width: 100%;
  img {
    width: 100%;
    vertical-align: bottom;
  }
}
.stockout {
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 0.426667rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  bottom: 45px;
  background: #dedede;
  .s1 {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  .s2 {
    font-size: 12px;
    color: #666;
    margin-left: 0.2rem;
  }
}
.footer-buy {
  width: 100%;
  height: 45px;
  position: fixed;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  bottom: 0;
  background: #fff;
  box-shadow: 0 0.053333rem 0.2rem 0 rgba(4, 0, 0, 0.1);

  .ctrl {
    flex: 1;
    font-size: 16px;
    display: flex;
    .cubeic-back {
      font-size: 16px;
      line-height: 45px;
      width: 21px;
      color: #333;
      padding-left: 10px;
    }
    .price {
      line-height: 45px;
      font-size: 0.48rem;
      color: #fba52b;
      flex: 1;
      margin-left: 0.533333rem;
      .price-text {
        font-size: 0.373333rem;
        margin-right: 0.08rem;
      }
    }
    .collect {
      width: 0.986667rem;
      text-align: center;
      padding-top: 0.133333rem;
      color: #999;
      p {
        font-size: 0.32rem;
        margin-top: 0.053333rem;
      }
    }
  }
  .button-buy {
    width: 135px;
    line-height: 45px;
    height: 100%;
    background-size: cover;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
  .button-but-no {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAABiCAYAAACCq2zlAAACw0lEQVR4Xu3UQQkAMBADwdRs/UsoVMS+5gwEhmPPtjtHgACBQOAITqBsggCBLyA4HoEAgUxAcDJqQwQICI4fIEAgExCcjNoQAQKC4wcIEMgEBCejNkSAgOD4AQIEMgHByagNESAgOH6AAIFMQHAyakMECAiOHyBAIBMQnIzaEAECguMHCBDIBAQnozZEgIDg+AECBDIBwcmoDREgIDh+gACBTEBwMmpDBAgIjh8gQCATEJyM2hABAoLjBwgQyAQEJ6M2RICA4PgBAgQyAcHJqA0RICA4foAAgUxAcDJqQwQICI4fIEAgExCcjNoQAQKC4wcIEMgEBCejNkSAgOD4AQIEMgHByagNESAgOH6AAIFMQHAyakMECAiOHyBAIBMQnIzaEAECguMHCBDIBAQnozZEgIDg+AECBDIBwcmoDREgIDh+gACBTEBwMmpDBAgIjh8gQCATEJyM2hABAoLjBwgQyAQEJ6M2RICA4PgBAgQyAcHJqA0RICA4foAAgUxAcDJqQwQICI4fIEAgExCcjNoQAQKC4wcIEMgEBCejNkSAgOD4AQIEMgHByagNESAgOH6AAIFMQHAyakMECAiOHyBAIBMQnIzaEAECguMHCBDIBAQnozZEgIDg+AECBDIBwcmoDREgIDh+gACBTEBwMmpDBAgIjh8gQCATEJyM2hABAoLjBwgQyAQEJ6M2RICA4PgBAgQyAcHJqA0RICA4foAAgUxAcDJqQwQICI4fIEAgExCcjNoQAQKC4wcIEMgEBCejNkSAgOD4AQIEMgHByagNESAgOH6AAIFMQHAyakMECAiOHyBAIBMQnIzaEAECguMHCBDIBAQnozZEgIDg+AECBDIBwcmoDREgIDh+gACBTEBwMmpDBAgIjh8gQCATEJyM2hABAoLjBwgQyAQEJ6M2RICA4PgBAgQyAcHJqA0RIPAArRgnb3s1usYAAAAASUVORK5CYII=);
  }
}
</style>