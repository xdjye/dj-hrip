<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "../../store/modules/city";

const router = useRouter();
const cityStore = useCityStore();
// cityStore.fetchAllCityData();
const { citys } = storeToRefs(cityStore);
const searchValue = ref();
const tabsActive = ref(Object.keys(citys)[0]);

// 点击搜索框的取消按钮
const cityCancel = () => {
  router.back();
};

// 城市点击事件
const cityClick = (item) => {
  cityStore.updateCurrentCityInfo(item);
  cityCancel()
}

watch(citys, (newVal, _Val) => {
  if(!Object.keys(newVal).length) {
    cityStore.fetchAllCityData();
  }
}, { deep: true, immediate: true })
</script>

<template>
  <div class="city">
    <div class="city-search">
      <van-search
        v-model="searchValue"
        shape="round"
        show-action
        placeholder="城市/区域/位置"
        @cancel="cityCancel"
      />
    </div>
    <div class="city-tabs">
      <van-tabs v-model:active="tabsActive">
        <van-tab
          v-for="(item, key, index) in citys"
          :key="key"
          :name="key"
          :title="item.title"
        />
      </van-tabs>
    </div>
    <div class="city-content">
      <template v-for="(value, key, index) in citys">
        <div v-show="tabsActive === key">
          <van-index-bar :sticky="false" :index-list="[ '#', ...(value?.cities || []).map(i => i.group) ]">
            <van-index-anchor class="popular-cities" index="热门"/>
            <div class="city-content-hotCities">
              <template v-for="item in (value.hotCities || [])">
                <van-tag type="warning" @click="cityClick(item)">{{ item.cityName }}</van-tag>
              </template>
            </div>
            <template v-for="item in (value.cities || [])">
              <van-index-anchor :index="item.group" />
              <van-cell
                v-for="itemx in (item.cities || [])"
                :key="itemx.cityId"
                :title="itemx.cityName" 
                @click="cityClick(itemx)"
              />
            </template>
          </van-index-bar>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city-content {
  height: calc(100vh - 98px);
  overflow: auto;
  :deep(.van-index-bar) {
    .van-index-anchor.van-index-anchor--sticky.van-hairline--bottom {
      margin-top: -1px;
    }
  }
  .city-content-hotCities {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 20px 10px 10px;
    :deep(.van-tag) {
      margin: 6px 3px;
      padding: 4px 18px;
      border-radius: 14px;
    }
  }
}
</style>
