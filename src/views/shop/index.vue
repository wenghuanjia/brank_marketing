<template>
  <div class="shop">
    <van-search
      v-model="inputValue"
      shape="round"
      background="#ffffff"
      @update:model-value="search"
    />
    <nothing v-if="0" />
    <div class="good-list">
      <div class="good-card" @click="handleJump(111)">
        <div class="good-card-img">
          <img
            src="http://www.ky200.com//api/file/showImg/1293455088741494786"
          />
        </div>
        <div class="good-card-msg">
          <p class="name">牛栏山百年陈酿三牛</p>
          <p class="price">¥ <span>0</span></p>
        </div>
      </div>
      <div class="good-card" @click="handleJump(222)">
        <div class="good-card-img">
          <img
            src="http://www.ky200.com//api/file/showImg/1293029144620937217"
          />
        </div>
        <div class="good-card-msg">
          <p class="name">板城和顺1975</p>
          <p class="price">¥ <span>168</span></p>
        </div>
      </div>
      <div class="good-card" @click="handleJump(333)">
        <div class="good-card-img">
          <img
            src="http://www.ky200.com//api/file/showImg/1251042931957788673"
          />
        </div>
        <div class="good-card-msg">
          <p class="name">伊犁英雄</p>
          <p class="price">¥ <span>468</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router'
import nothing from "@/components/nothing/index";
export default defineComponent({
  setup() {
    const router = useRouter();
    let inputValue = ref("");
    // 搜索 事件
    const search = (val) => {
      console.log(val);
    };
    // 跳转 事件
    const handleJump = (id) => {
      router.push(`/shop-detail/${id}`)
    }
    return {
      inputValue,
      search,
      handleJump
    };
  },
  components: {
    nothing,
  },
});
</script>

<style lang="less" scoped>
.shop {
  margin-bottom: 50px;
}
.good-list {
  box-sizing: border-box;
  column-count: 2;
  column-gap: 0.4rem;
  padding: 0.266667rem 0.4rem;
  margin-bottom: 0.266667rem;
  .good-card {
    break-inside: avoid;
    // break-inside: avoid-column;
    border-radius: 0.16rem;
    background: #fff;
    display: flex;
    position: relative;
    flex-direction: column;
    margin-bottom: 0.4rem;
    box-shadow: 0 0.053333rem 0.2rem 0 rgba(4, 0, 0, 0.05);
    .good-card-img {
      width: 100%;
      height: auto;
      img {
        width: 100%;
        height: 100%;
        vertical-align: bottom;
        border-top-right-radius: 0.16rem;
        border-top-left-radius: 0.16rem;
      }
    }
    .good-card-msg {
      padding: 0.293333rem 0.213333rem;
      width: 100%;
      height: 2.186667rem;
      box-sizing: border-box;
      position: relative;
      .name {
        font-size: 0.373333rem;
        font-weight: 600;
        line-height: 0.4rem;
      }
      .price {
        font-size: 0.32rem;
        font-weight: 600;
        color: #fba52b;
        position: absolute;
        bottom: 0.293333rem;
        span {
          font-size: 0.453333rem;
          font-weight: 600;
        }
      }
    }
  }
}
</style>