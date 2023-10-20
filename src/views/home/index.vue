<script setup>
import HomeTopBar from "./topbar/index.vue";
const images = [
  'https://img0.baidu.com/it/u=3367849242,262203409&fm=253&fmt=auto?w=750&h=300',
  'https://img1.baidu.com/it/u=3652110139,1244295086&fm=253&fmt=auto?w=750&h=300',
];
</script>

<template>
  <div class="home">
    <HomeTopBar/>
    <div class="banner">
      <van-swipe :autoplay="3000" lazy-render indicator-color="#ff9854">
        <van-swipe-item v-for="image in images" :key="image">
          <img style="width: 100%;" :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="location">
      <div>苏州</div>
      <div>
        <span>我的位置</span>
        <van-icon name="location-o" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>