<template>
  <div class="profile">
    <div class="header-msg">
      <template v-if="!isLogin">
        <div class="img_name">
          <div class="header-img-name">
            <img
              src="http://www.ky200.com/scanpage/market/img/pig.76934008.jpg"
            />
            <p>游客</p>
          </div>
          <div class="header-login" @click="handleLogin">
            <p>登录注册</p>
            <van-icon name="arrow" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="img_name">
          <div class="header-img-name">
            <img
              src="http://www.ky200.com/scanpage/market/img/pig.76934008.jpg"
            />
            <p>{{ user.mobile }}</p>
          </div>
          <div class="header-login" @click="logout">
            <p>退出登录</p>
            <!-- <van-icon name="arrow" /> -->
          </div>
        </div>
      </template>

      <div class="personal-data" :class="{ 'no-login-in': !isLogin }">
        <div class="datas">
          <p class="num no-login">-</p>
          <p class="context no-login">产品收藏</p>
        </div>
        <div class="datas">
          <p class="num no-login">-</p>
          <p class="context no-login">企业关注</p>
        </div>
        <div class="datas">
          <p class="num no-login">-</p>
          <p class="context no-login">资讯收藏</p>
        </div>
        <div class="datas">
          <p class="num no-login">-</p>
          <p class="context no-login">扫码记录</p>
        </div>
      </div>
    </div>
    <div class="model" :class="{ 'no-login-in': !isLogin }">
      <div class="title no-login">福利互动</div>
      <div class="options">
        <div class="button">
          <img
            src="data:image/png;base64,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"
            class="no-login-icon"
          />
          <p class="no-login">红包</p>
        </div>
        <div class="button">
          <img
            src="data:image/png;base64,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"
            class="no-login-icon"
          />
          <p class="no-login">积分</p>
        </div>
      </div>
    </div>
    <div class="tool" :class="{ 'no-login-in': !isLogin }">
      <div class="title no-login">工具服务</div>
      <div class="options">
        <div class="button">
          <img
            src="data:image/png;base64,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"
            class="no-login-icon"
          />
          <p class="no-login">我的订单</p>
        </div>
        <div class="button">
          <img
            src="data:image/png;base64,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"
            class="no-login-icon"
          />
          <p class="no-login">地址管理</p>
        </div>
        <div class="button">
          <img
            src="data:image/png;base64,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"
            class="no-login-icon"
          />
          <p class="no-login">设置</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { state, commit } = useStore();
    const user = computed(() => state.user);
    const isLogin = computed(() => state.user);

    const handleLogin = () => {
      router.push({
        path: "/login",
        query: {
          redirect: route.fullPath,
        },
      });
    };
    // 退出登录
    const logout = () => {
      Dialog.confirm({
        title: "提示",
        message: "确认退出登录",
      })
        .then(() => {
          commit("logout");
        })
        .catch(() => {});
    };
    return {
      handleLogin,
      user,
      isLogin,
      logout,
    };
  },
};
</script>

<style lang="less" scoped>
.header-msg {
  position: relative;
  width: 100%;
  height: 170px;
  background: url(http://www.ky200.com/scanpage/market/img/MK_geren@2x.6559ab64.png)
    no-repeat 0 0;
  background-size: cover;
  .img_name {
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.813333rem;
    line-height: 1.813333rem;
    padding: 0.773333rem 0.426667rem 0 0.426667rem;
    padding-top: 60px;
    box-sizing: border-box;
    justify-content: space-between;
    img {
      width: 1.813333rem;
      height: 1.813333rem;
      border-radius: 50%;
    }
    p {
      font-size: 0.426667rem;
      color: #fff;
      font-weight: 600;
      margin-left: 0.533333rem;
    }
    .header-login {
      align-items: center;
      p {
        font-size: 14px;
        font-weight: 400;
      }
      i {
        font-size: 12px;
        margin-left: 0.106667rem;
        color: #fff;
      }
    }
  }
  .personal-data {
    display: flex;
    position: absolute;
    bottom: -0.693333rem;
    width: 9.52rem;
    height: 1.813333rem;
    margin-left: 0.24rem;
    border-radius: 0.186667rem;
    background: #fff;
    box-sizing: border-box;
    .datas {
      width: 25%;
      padding: 0.346667rem 0;
      position: relative;
      text-align: center;
    }
  }
}
.header-img-name,
.header-login {
  display: flex;
}
.num {
  color: #494949;
  font-size: 17px;
  font-weight: 600;
}
.context {
  width: 100%;
  bottom: 0.346667rem;
  color: #333;
  font-size: 0.32rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.model,
.tool {
  width: 9.52rem;
  height: 130px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 37px;
  background: #fff;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
}
.title {
  height: 48px;
  width: 100%;
  line-height: 48px;
  font-size: 16px;
  font-weight: 600;
  color: #494949;
  padding: 0 12px;
  box-sizing: border-box;
  border-bottom: 1px solid #e4e4e4;
}
.options {
  display: flex;
  flex: 1;
  width: 100%;
}
.button {
  width: 25%;
  text-align: center;
  padding-top: 15px;
  img {
    width: 32px;
    height: 32px;
    display: block;
    margin: 0 auto;
  }
  p {
    margin-top: 3px;
    color: #494949;
    font-size: 14px;
    font-weight: 600;
  }
}
.no-login-in .no-login {
  color: rgba(0, 0, 0, 0.2) !important;
  pointer-events: none !important;
}
.no-login-in .no-login-icon {
  opacity: 0.2 !important;
  pointer-events: none !important;
}
</style>