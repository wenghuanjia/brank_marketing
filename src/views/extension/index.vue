<template>
  <div class="back" @click="back">
    <van-icon name="arrow-left" />
  </div>
  <div class="extension" ref="extension">
    <h2 class="head">给自己代言，自动加你</h2>
    <canvas style="display: none" ref="canvas"></canvas>
    <img class="cover" v-if="url" :src="url" alt="" />
    <p class="txt">扫码关注我</p>
    <p class="txt">不错过重要人脉通知</p>
  </div>
  <van-button
    class="down"
    hairline
    plain
    type="primary"
    size="small"
    @click="savePng"
  >
    保存到本地
  </van-button>
</template>

<script>
import { reqCodeUrl } from "../../api/user";
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const extension = ref();
    const canvas = ref();
    const url = ref();
    const router = useRouter();
    let codeUrl = "";

    const savePng = () => {
      html2canvas(extension.value).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.setAttribute("download", "extension.png");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
      });
    };

    const generateQR = async (text) => {
      try {
        url.value = await QRCode.toDataURL(text);
      } catch (err) {
        console.error(err);
      }
    };
    // 获取 地址
    const _getCodeUrl = async () => {
      let res = await reqCodeUrl();
      if (res.status === 1) {
        codeUrl = res.data;
      } else {
        console.log(res);
      }
    };
    onMounted(async () => {
      await _getCodeUrl();
      generateQR(codeUrl);
    });

    const back = () => {
      router.back();
    };

    return {
      extension,
      savePng,
      back,
      canvas,
      url,
    };
  },
};
</script>

<style lang="less" scoped>
.back {
  position: fixed;
  z-index: 2;
  left: 20px;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #cccccc;
  border-radius: 50%;
}
.extension {
  width: 100vw;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .head {
    font-size: 24px;
    color: red;
  }
  .txt {
    line-height: 1.5;
    font-size: 20px;
  }
}
.down {
  position: fixed;
  right: 30px;
  bottom: 20px;
}
.cover {
  width: 80%;
}
</style>