<template>
  <router-view />
</template>
<script>
import { getStore } from "@/common/common";
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const { commit } = useStore();
    onMounted(() => {
      let isLogin = getStore("isLogin");
      let user = JSON.parse(getStore("user"));
      let token = getStore("token");
      if (isLogin && token) {
        commit("loginSetUserInfo", {
          user,
          token,
        });
      }
    });
    return {};
  },
};
</script>
