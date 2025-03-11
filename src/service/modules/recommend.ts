import hyRequest from ".."

/**
 * 获取轮播图
 */
export function getBanners() {
  return hyRequest.get({
    url: "/api/banner"
  })
}
