import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHouseList } from "../../service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    housePage: 1
  }),
  actions: {
    async getHotSuggests() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async getCategories() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    async getHouses() {
      const res = await getHouseList({ page: this.housePage });
      this.houseList.push(...res.data);
      this.housePage++
    }
  }
});

export default useHomeStore