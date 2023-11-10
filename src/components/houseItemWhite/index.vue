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
  <div class="houseItemWhite" :key="houseItem.data.cityId">
    <div class="cover">
      <img :src="houseItem.data.image.url"/>
    </div>
    <div class="houseItemWhite-text">
      <div class="houseItemWhite-location">
        <van-icon name="location-o" />
        {{ houseItem.data.location }}
      </div>
      <div class="houseItemWhite-houseName">{{ houseItem.data.houseName }}</div>
      <div class="houseItemWhite-title">{{ houseItem.data.summaryText }}</div>
      <div class="houseItemWhite-price">
        <div class="houseItemWhite-finalPrice">￥{{ houseItem.data.finalPrice }}</div>
        <van-tag 
          v-if="!!houseItem.data.priceTipBadge?.text"
          class="houseItemWhite-price-tag"
          round
          :color="`linear-gradient(to left, ${houseItem.data.priceTipBadge?.gradient.startColor}, #${houseItem.data.priceTipBadge?.gradient.endColor})`"
        >
          <van-icon name="volume-o" />
          {{ houseItem.data.priceTipBadge?.text }}
        </van-tag>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .houseItemWhite {
    display: flex;
    flex-direction: column;
    padding: 4px;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 50%;
    box-sizing: border-box;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      flex: 1;
      border-radius: 6px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      overflow: hidden;
    }
    .cover img {
      width: 100%;
    }
    .houseItemWhite-text {
      display: flex;
      flex-direction: column;
      justify-content: end;
      flex: 1;
      padding: 4px;
      background-color: #ffffff;
      border-radius: 6px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      overflow: hidden;
      .houseItemWhite-location {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .houseItemWhite-houseName {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 4px;
        font-size: 14px;
        color: #333;
      }
      .houseItemWhite-title {
        margin-top: 4px;
        font-size: 12px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .houseItemWhite-price {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .houseItemWhite-finalPrice {
          font-size: 14px;
          color: var(--primary-color);
        }
        .houseItemWhite-price-tag {
          margin-left: 4px;
          font-size: 12px;
        }
      }
    }
  }
</style>