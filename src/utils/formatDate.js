import dayjs from "dayjs";

// 格式化月日
export const formatMontDay = (date) => {
  return dayjs(date).format("MM月DD日")
}

// 格式化日期（今天、明天、后天、周等）
export const formatDayType = (date) => {
  const newDate = dayjs().format("YYYY-MM-DD") + " 00:00:00"; // 当前时间
  const date_ = dayjs(date).format("YYYY-MM-DD") + " 00:00:00";
  const day_ = dayjs(newDate, "YYYY-MM-DD hh:mm:ss").diff(dayjs(date_, "YYYY-MM-DD hh:mm:ss"), 'day'); // 获得相差天数
  const diffDay = Math.abs(day_);
  switch (diffDay) {
    case 0:
      return "今天"

    case 1:
      return "明天"

    case 2:
      return "后天"

    default:
      const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      return days[dayjs(date).day()]
  }
}