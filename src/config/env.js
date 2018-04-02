/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = ''
let routerMode = 'hash'
let imgBaseUrl

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.2.160'
  imgBaseUrl = 'http://192.168.2.167:9000/img/'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
  imgBaseUrl = ''
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
