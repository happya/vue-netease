<template>
  <ul class="menu-list">
    <li class="menu-item" v-for="(item, index) of menu" :key="index">
      <div class="icon-circle">
        <i :class="item.icon"></i>
      </div>
      <span class="text">{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CircleMenu',
  props: {
    menu: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable.styl'
  .menu-list
    display: flex
    align-items: center
    justify-content: center
    padding: 10px 0 23px 0
    border-bottom: 0.5px solid $color-text-ll
    .menu-item
      display: flex
      flex-direction: column
      flex: 1
      align-items: center
      justify-content: center
      .icon-circle
        display: flex
        align-items: center
        text-align: center
        width: 46px
        height: 46px
        border-radius: 100%
        background: $color-theme
        margin: 10px 0
        .fa
          flex: 1
          color: $color-background-l
          font-size: 22px
      .text
        line-height: 14px
        font-size: $font-size-normal
        text-align: center
</style>
