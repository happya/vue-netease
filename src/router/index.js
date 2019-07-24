import Vue from 'vue'
import Router from 'vue-router'
import Find from 'views/find/index'
import Video from 'views/video/index'
import User from 'views/user/index'
import Friends from 'views/friends/index'
import Account from 'views/account/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/find'
    }, {
      path: '/find',
      component: Find
    }, {
      path: '/video',
      component: Video
    }, {
      path: '/user',
      component: User
    }, {
      path: '/friends',
      component: Friends
    }, {
      path: '/account',
      component: Account
    }
  ]
})
