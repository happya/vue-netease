import Vue from 'vue'
import vueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store'

import 'common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'

Vue.use(vueAwesomeSwiper)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
