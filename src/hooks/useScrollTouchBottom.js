export default function useScrollTouchBottom(El = window) {
  El.document.addEventListener("scroll", () => {
    const clientHeight = El.documentElement.clientHeight; // 滚动容器的可视高度
    const scrollTop = El.documentElement.scrollTop; // 容器已滚动的高度
    const scrollHeight = El.documentElement.scrollHeight; // 容器总共可以滚动的高度
    console.log(clientHeight, scrollTop, scrollHeight);
    if((clientHeight + scrollTop) >= scrollHeight) return true
    return false
  })
}