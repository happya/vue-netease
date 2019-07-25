<template>
  <div class="foot-nav">
    <menu-row :menuItems="navItem"></menu-row>
  </div>
</template>

<script>
import MenuRow from 'components/base/menu-row'
export default {
  data() {
    return {
      navItem: [
        {
          name: '发现',
          iconName: 'fa fa-headphones',
          link: '/find'
        }, {
          name: '视频',
          iconName: 'fa fa-youtube-play',
          link: '/video'
        }, {
          name: '我的',
          iconName: 'fa fa-music',
          link: '/user'
        }, {
          name: '朋友',
          iconName: 'fa fa-group',
          link: '/friends'
        }, {
          name: '账号',
          iconName: 'fa fa-user-o',
          link: '/account'
        }
      ]
    }
  },
  components: {
    MenuRow
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .foot-nav
    position: fixed
    left: 0
    bottom: 0
    right: 0
    height: 50px
    // background: $color-background
</style>
