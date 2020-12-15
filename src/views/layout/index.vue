<template>
  <div class="layout-container">
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="wap-home-o" to="/">查询</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/shop">商城</van-tabbar-item>
      <van-tabbar-item icon="qr-invalid" to="/enterprise">企业</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/profile">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "LayoutIndex",
  setup() {
    const active = ref(0);
    return {
      active
    };
  },
});
</script>

<style lang="less" scoped>
</style>
