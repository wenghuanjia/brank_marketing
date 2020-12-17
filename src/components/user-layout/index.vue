<template>
  <div class="user-layout">
    <p class="login-title">{{ title }}</p>
    <slot></slot>
    <div class="bottom">
      <van-icon @click="$router.back()" name="arrow-left" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="less" scoped>
.user-layout {
  width: 100vw;
  min-height: 100vh;
  background: #fff;
}
.login-title {
  padding: 15px 28px;
  color: #333;
  font-size: 17px;
  font-weight: 600;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 99;
  height: 45px;
  line-height: 45px;
  box-sizing: border-box;
  padding: 0 10px;
  background: #fff;
  box-shadow: 0 0.053333rem 0.2rem 0 rgba(4, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    padding: 0 5px;
    height: 100%;
    line-height: 45px;
  }
}
</style>