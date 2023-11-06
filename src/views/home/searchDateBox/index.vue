<script setup>
import { computed, reactive, ref } from 'vue';
import dayjs from "dayjs";
import { formatMontDay, formatDayType } from '../../../utils/formatDate';

const d_ = new Date();
const dateShow = ref(false);
const dates = reactive({
  startD: new Date(),
  endD: new Date(d_.setDate(d_.getDate() + 1))
});
const differDay = computed(() => {
  const day = dayjs(dates.endD).diff(dates.startD, 'day');
  return `共${day}晚`
});

// 日期选择完毕
const dateConfirm = (date) => {
  dates.startD = date[0];
  dates.endD = date[1];
  dateShow.value = false;
}

// 日期面板格式化
const formatter = (day) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();
  if(month === 5 && date === 1) {
    day.bottomInfo = '劳动节'
  }
  if(month === 11 && date === 1) {
    day.bottomInfo = '万圣节'
  }
  if(day.type === "start") {
    day.bottomInfo = '入住';
  } else if(day.type === "end") {
    day.bottomInfo = '离店';
  }
  return day
}
</script>

<template>
  <div class="search-Date-box">
    <div class="start" @click="dateShow = true">
      <span class="title">{{ formatDayType(dates.startD) }}入住</span>
      <span class="start_date">{{ formatMontDay(dates.startD) }}</span>
    </div>
    <div class="stay">{{ differDay }}</div>
    <div class="end" @click="dateShow = true">
      <span class="title">{{ formatDayType(dates.endD) }}离店</span>
      <span class="end_date">{{ formatMontDay(dates.endD) }}</span>
    </div>
    <van-calendar 
      class="search-calendar"
      title="选择入住时间"
      type="range" 
      :default-date="[dates.startD, dates.endD]"
      v-model:show="dateShow" 
      :min-date="new Date()" 
      :max-range="30" 
      :formatter="formatter"
      :round="false"
      color="#ff9854"
      range-prompt="当前仅支持提前预定30天的住宿"
      confirm-disabled-text="请选择"
      confirm-text="我已选好"
      @confirm="dateConfirm"
    />
  </div>
</template>

<style lang="less" scoped>
  .search-Date-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    --van-calendar-popup-height: 100%;
    .start, .end {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 12px;
        color: #999;
      }
      .start_date, .end_date {
        font-weight: 600;
      }
    }
    .stay {}
  }
</style>