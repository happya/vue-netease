import Vue from 'vue'
import Router from 'vue-router'
import Find from 'views/find/index'
import Video from 'views/video/index'
import User from 'views/user/index'
import Friends from 'views/friends/index'
import Account from 'views/account/index'
import Playlist from 'views/find/playlist/playlist'
// import DiscDetail from 'components/disc-detail/disc-detail'
import ListDetail from 'views/find/playlist/list-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/find'
    }, {
      path: '/find',
      component: Find,
      children: [
        {
          path: ':id',
          component: ListDetail
        }
      ]
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
    }, {
      path: '/playlist',
      component: Playlist,
      children: [
        {
          path: ':id',
          component: ListDetail
        }
      ]
    }
  ]
})
