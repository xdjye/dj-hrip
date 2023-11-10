<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { showToast } from "vant";
import { storeToRefs } from "pinia";
import HomeTopBar from "./topbar/index.vue";
import SearchDateBox from "./searchDateBox/index.vue";
import SearchHotSuggersts from "./searchHotSuggests/index.vue";
import HouseList from "./houseList/index.vue";
import SortNavBar from "./sortNavBar/index.vue";
import useCityStore from "../../store/modules/city";
import useHomeStore from "../../store/modules/home";
import { getAssetsUrl } from "../../utils/loadAssets";
import useScrollTouchBottom from "../../hooks/useScrollTouchBottom";

const isBottom = useScrollTouchBottom();
const cityStore = useCityStore();
const { currentCityInfo } = storeToRefs(cityStore);

const homeStore = useHomeStore();
homeStore.getHotSuggests();
homeStore.getCategories();
homeStore.getHouses();

const router = useRouter();
const searchValue = ref(null);

const images = [
  'assets/img/banner1.jpg',
  'assets/img/banner2.jpg',
  'assets/img/banner3.jpg',
  'assets/img/banner4.jpg',
  'assets/img/banner5.jpg',
  'assets/img/banner6.jpg',
];

// 获取我的位置
const getCityLocation = () => {
  navigator.geolocation.getCurrentPosition(
    res => {
      console.log("获取位置成功", res);
    },
    err => {
      console.log("获取位置失败", err);
      errTips()
    }, {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 75000
    }
  )
}

// 失败提示
const errTips = () => {
  showToast({
    message: '定位获取失败，请切换浏览器重试或手动选择城市！',
    wordBreak: 'break-word',
    duration: 3000
  })
}

// 跳转筛选城市页面
const gotoCityPage = () => {
  router.push("/city");
}

watch(currentCityInfo, (newVal, _Val) => {
  if(!Object.keys(newVal).length) {
    cityStore.fetchAllCityData();
  }
}, { deep: true, immediate: true });
</script>

<template>
  <div class="home" id="home">
    <HomeTopBar/>
    <div class="banner">
      <van-swipe :autoplay="3000" lazy-render indicator-color="#ff9854">
        <van-swipe-item v-for="image in images" :key="image">
          <img style="width: 100%;" :src="getAssetsUrl(image)" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="location bar-bottom-border">
      <div class="city" @click="gotoCityPage">{{ currentCityInfo?.cityName }}</div>
      <div class="position" @click="getCityLocation">
        <span>我的位置</span>
        <van-icon name="location-o" />
      </div>
    </div>
    <div class="desc-area">
      <span>价格不限</span>
      <span>人数不限</span>
    </div>
    <van-field v-model="searchValue" placeholder="关键字/位置/民宿名" clearable/>
    <SearchDateBox/>
    <SearchHotSuggersts/>
    <SortNavBar/>
    <HouseList/>
    <div style="position: fixed;bottom: 0;left: 0;z-index: 9;">{{ isBottom ? '已触底' : '没触底' }}</div>
  </div>
</template>

<style lang="less" scoped>
  .home {
    padding-bottom: 60px;
    .location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 44px;
      .city {
        font-weight: 600;
        color: var(--primary-color);
      }
      .position {
        display: flex;
        justify-content: end;
        align-items: center;
        :deep(.van-icon) {
          margin-left: 6px;
          font-size: 18px;
          color: var(--primary-color);
        }
      }
    }
    .desc-area {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
    }
    :deep(.van-cell.van-field) {
      padding: 10px 20px;
    }
  }
</style>