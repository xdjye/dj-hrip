<script setup>
import { ref, defineEmits, watch } from 'vue';
import { storeToRefs } from "pinia";
import useHomeStore from "../../../store/modules/home";
import HouseItem from "../../../components/houseItem/index.vue";
import HouseItemWhite from "../../../components/houseItemWhite/index.vue";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
</script>

<template>
  <div class="houseList">
    <div class="houseList-title">热门精选</div>
    <div class="houseList-list">
      <template v-for="item in houseList">
        <HouseItem v-if="item.discoveryContentType === 9" :houseItem="item"/>
        <HouseItemWhite v-else-if="item.discoveryContentType === 3" :houseItem="item"/>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .houseList {
    background-color: #f5f7f9;
    .houseList-title {
      padding: 4px 20px 10px;
      font-size: 16px;
      background-color: #ffffff;
    }
    .houseList-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 6px;
      padding: 0 10px 10px;
    }
  }
</style>