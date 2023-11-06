<script setup>
import { useRoute } from "vue-router";
import Tabbar from "@/components/tabbar/index.vue";

const route = useRoute();
</script>

<template>
  <div class="app">
    <router-view/>
    <Tabbar v-if="!route.meta?.isHideTabBar"/>
  </div>
</template>

<style scoped>
</style>
