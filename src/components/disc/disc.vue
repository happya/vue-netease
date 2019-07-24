<template>
  <div class="disc">
    <div class="title">
      <div class="name">推荐歌单</div>
      <div class="link">歌单广场</div>
    </div>
    <ul class="disc-list">
      <li class="disc-item" v-for="item of data" :key="item.id">
        <div class="cover">
          <img :src="item.picUrl">
        </div>
        <p class="text">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Disc',
  props: {
    data: {
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
  @import '~common/stylus/mixin.styl'
  .disc
    .title
      display: flex
      margin: 20px 15px 0px 18px
      align-items: center
      .name
        flex: 1
        font-size: $font-size-large
        line-height: 32px
        font-weight: bold
      .link
        padding: 8px 15px
        border-radius: 15px
        border: 1px solid $color-background
        font-size: $font-size-normal
    .disc-list
      margin-left: 2px
      .disc-item
        display: inline-block
        width: 110px
        height: 150px
        padding-left: 10px
        margin: 15px 0
        .cover
          display: block
          width: 110px
          height: 110px
          img
            width: 100%
            height: 100%
            border-radius: 6px
        .text
          width: 100%
          margin: 7px 2px 0 2px
          font-size: $font-size-normal
          line-height: 18px
          no-wrap-line(2)

</style>
