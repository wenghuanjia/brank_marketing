<template>
  <div class="nothing">
    <van-empty
      class="custom-image"
      image="http://www.ky200.com/scanpage/market/img/quesheng@2x.83cc60b9.png"
      :description="description"
    />
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Nothing",
  props: {
    description: {
      type: String,
      default: "暂无资讯信息",
    }
  },
});
</script>

<style lang="less">
.nothing {
  font-size: 0.373333rem;
  text-align: center;
  color: #666;
  padding: 4.346667rem 0 6.106667rem 0;
}
.custom-image .van-empty__image {
  width: 3.2rem;
  height: 2.24rem;
}
</style>