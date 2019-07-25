<template>
  <ul class="nav-wrapper">
    <router-link tag="li"
                  class="nav-item"
                  v-for="(item,index) of menuItems"
                  :key="index"
                  :to="item.link"
    >
      <i class="icon" :class="item.iconName"></i>
      <span class="text">{{item.name}}</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .nav-wrapper
    display: flex
    width: 100%
    height: 100%
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
