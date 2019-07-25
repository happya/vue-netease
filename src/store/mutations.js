import * as types from './mutation-types'

const mutations = {
  [types.SET_BANNER_LIST] (state, list) {
    state.banners = list
  },
  [types.SET_DISC] (state, disc) {
    state.disc = disc
  }
}

export default mutations
