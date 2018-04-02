import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  banners: [] // 首页轮播图
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
