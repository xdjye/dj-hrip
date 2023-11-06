import HYRequest from "../request";

export const getAllCity = () => HYRequest.get({ url: "/city/all" }); // 获取所有城市