import {
  getBanners
} from '../service/getData'
import {
  GET_BANNERS
} from './mutation-types.js'

export default {

  async getBanners ({
    commit,
    state
  }) {
    let res = await getBanners()
    if (res.status == 'succ') { commit(GET_BANNERS, res.data) }
  }
}
