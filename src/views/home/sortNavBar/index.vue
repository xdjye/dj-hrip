<script setup>
import { storeToRefs } from "pinia";
import useHomeStore from "../../../store/modules/home";

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>

<template>
  <div class="sortNavBar">
    <a class="sortNavBar-li" v-for="nav in categories" :key="nav.id" :href="nav.navigateUrl">
      <img :src="nav.subPictureUrl"/>
      <span>{{ nav.title }}</span>
    </a>
  </div>
</template>

<style lang="less" scoped>
  .sortNavBar {
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding: 6px 20px;
    background-color: #f2f2f2;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .sortNavBar-li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      margin: 0 10px;
      img {
        width: 30px;
      }
      span {
        margin-top: 6px;
        font-size: 12px;
      }
    }
  }
</style>