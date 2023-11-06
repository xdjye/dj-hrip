import { defineStore } from "pinia";
import { getAllCity } from "../../service";

const useCityStore = defineStore("city", {
  state: () => ({
    citys: [],
    currentCityInfo: JSON?.parse(window.localStorage.getItem("cityInfo")) || {}
  }),
  actions: {
    async fetchAllCityData() {
      const res = await getAllCity();
      this.citys = res.data;
      if(!this.currentCityInfo?.cityId) { // 默认没有城市地址的时候，显示第一个城市
        const currentKey_ = Object.keys(res.data)[0];
        const currentInfo_ = res.data[currentKey_].hotCities[0];
        this.currentCityInfo = currentInfo_;
        window.localStorage.setItem("cityInfo", JSON.stringify(currentInfo_ || {}))
      }
    },
    updateCurrentCityInfo(info) {
      this.currentCityInfo = info;
      window.localStorage.setItem("cityInfo", JSON.stringify(info || {}))
    }
  }
});

export default useCityStore