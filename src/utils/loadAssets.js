export const getAssetsUrl = (_url) => {
  return new URL(`../${_url}`, import.meta.url).href
}