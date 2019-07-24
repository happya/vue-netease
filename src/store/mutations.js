import * as types from './mutation-types'

const mutations = {
  [types.SET_BANNER_LIST] (state, list) {
    state.banners = list
  }
}

export default mutations
