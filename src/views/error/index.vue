<template>
  <nothing description="页面不存在">
    <div class="back" @click="back">
      <van-icon name="arrow-left" />
      <span class="back-text">返回上一个页面</span>
    </div>
  </nothing>
</template>

<script>
import nothing from "@/components/nothing/index";
import { useRouter } from 'vue-router';
export default {
  components: {
    nothing,
  },
  setup() {
    const router = useRouter();
    const back = () => {
      router.back();
    }
    return {
      back
    }
  }
};
</script>

<style lang="less" scoped>
.back {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1989fa;
  .back-text {
    padding-left: 5px;
  }
}
</style>