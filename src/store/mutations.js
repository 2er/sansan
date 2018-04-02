import {
  GET_BANNERS
} from './mutation-types.js'

export default {
  // 获取用户信息存入vuex
  [GET_BANNERS] (state, info) {
    state.banners = info
  }
}
