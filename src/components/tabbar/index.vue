<script setup>
import { ref } from "vue";
const tabbarList = [
  { title: "首页", path: "/home", icon: "wap-home-o", activeIcon: "wap-home", badge: "" },
  { title: "收藏", path: "/favor", icon: "like-o", activeIcon: "like", badge: "" },
  { title: "订单", path: "/order", icon: "description-o", activeIcon: "description", badge: "" },
  { title: "消息", path: "/message", icon: "chat-o", activeIcon: "chat", badge: "10" },
];
const currentPath = ref("/home");

</script>

<template>
  <div class="tabbar">
    <van-tabbar v-model="currentPath" active-color="#ff9854" route>
      <van-tabbar-item 
        v-for="(item, index) in tabbarList" 
        :icon="$route.path === item.path ? item.activeIcon : item.icon"
        :to="item.path"
        :name="item.path"
        :badge="item.badge"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
</style>