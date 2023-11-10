<script setup>
import { defineProps } from 'vue';
defineProps({
  houseItem: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="houseItem" :key="houseItem.data.cityId">
    <div class="cover">
      <img :src="houseItem.data.image.url"/>
    </div>
    <div class="houseItem-text">
      <div class="houseItem-title">{{ houseItem.data.summaryText }}</div>
      <div class="houseItem-houseName">{{ houseItem.data.houseName }}</div>
      <div class="houseItem-price">
        <van-rate :size="12" :gutter="2" readonly allow-half :model-value="parseFloat(houseItem.data.commentScore)" />
        <div>￥{{ houseItem.data.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .houseItem {
    position: relative;
    padding: 4px;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 50%;
    box-sizing: border-box;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      border-radius: 6px;
      overflow: hidden;
    }
    .cover img {
      width: 100%;
    }
    .houseItem-text {
      display: flex;
      flex-direction: column;
      justify-content: end;
      position: absolute;
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      padding: 10px;
      color: #ffffff;
      background-color: rgba(0, 0, 0, .2);
      border-radius: 6px;
      .houseItem-title {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .houseItem-houseName {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 4px;
        font-size: 14px;
      }
      .houseItem-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
      }
    }
  }
</style>