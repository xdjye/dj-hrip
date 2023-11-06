<script setup>
import { ref, defineEmits, watch } from 'vue';
import { storeToRefs } from "pinia";
import useHomeStore from "../../../store/modules/home";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);

const finished = ref(false);

const onLoad = () => {
  console.log("触底了");
}
</script>

<template>
  <div class="houseList">
    <div>热门推荐</div>
    <van-list
      :finished="finished"
      finished-text="已加载全部"
      @load="onLoad"
    >
      <van-cell v-for="item in houseList" :key="item.data.houseId" :title="item.data.houseName" />
    </van-list>
  </div>
</template>

<style lang="less" scoped></style>