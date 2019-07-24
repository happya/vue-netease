<template>
  <div class="foot-nav">
    <ul class="nav-wrapper">
      <router-link tag="li"
                   class="nav-item"
                   v-for="(item,index) of navItem"
                   :key="index"
                   :to="item.link"
      >
        <i class="icon" :class="item.iconName"></i>
        <span class="text">{{item.name}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
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
    .nav-wrapper
      display: flex
      width: 100%
      height: 100%
      background: $color-background
      .nav-item
        display: flex
        flex: 1
        flex-direction: column
        align-items: center
        justify-content: center
        font-size: $font-size-normal
        &.router-link-active
          .icon, .text
            color: $color-theme
        .icon
          line-height: 20px
          font-size: 20px
          padding: 5px 0
          color: $color-text-l
          font-weight: 1px
        .text
          font-size: $font-size-small
          line-height: 12px
          color: $color-text-l
</style>
