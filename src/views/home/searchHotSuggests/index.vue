<script setup>
import { storeToRefs } from "pinia";
import useHomeStore from '../../../store/modules/home';

const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);

</script>

<template>
  <div class="notice-swipe">
    <div class="notice-swipe-tags">
      <template v-for="tag in (hotSuggests || [])">
        <van-tag :color="tag.tagText.background.color" :text-color="tag.tagText.color">{{ tag.tagText.text }}</van-tag>
      </template>
    </div>
    <div class="notice-swipe-btn">
      <van-button block round color="linear-gradient(to right, rgb(255 165 84), rgb(245 108 0))">
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :touchable="false"
          :show-indicators="false"
        >
          <van-swipe-item>马上开始</van-swipe-item>
          <van-swipe-item>寻心仪名宿</van-swipe-item>
        </van-swipe>
      </van-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .notice-swipe {
    &-tags {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 20px;
      :deep(.van-tag) {
        margin: 4px 6px;
        padding: 4px 6px;
        font-size: 14px;
        border-radius: 4px;
      }
    }
    &-btn {
      padding: 0 20px;
    }
    .notice-swipe {
      height: 44px;
      line-height: 44px;
    }
  }
</style>