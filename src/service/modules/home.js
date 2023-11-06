import HYRequest from "../request";

export const getHomeHotSuggests = () => HYRequest.get({ url: "/home/hotSuggests" }); // 获取首页-搜索相关热词标签

export const getHomeCategories = () => HYRequest.get({ url: "/home/categories" }); // 获取首页分类导航栏

export const getHouseList = (params) => HYRequest.get({ url: "/home/houselist", params })