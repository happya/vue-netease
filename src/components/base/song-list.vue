<!--
  --------------------------------
  -----------歌曲列表------------
  ---歌曲列表通用组件，
  ---使用的时候可以用一个scroll组件封装
  ----------------------------------
  -->
<template>
  <div class="song-list">
    <div class="header">
      <i class="fa fa-play-circle-o"></i>
      <span class="text">播放全部</span>
      <div class="favor">+ 收藏 ({{subCount}})</div>
    </div>
    <ul>
      <li class="item"
          v-for="(song, index) of songs"
          :key="index"
          @click="selectItem(song, index)"
      >
        <div class="rank" v-show="rank">
          <span v-text="index + 1"></span>
        </div>
        <div class="content">
          <h1 class="name">{{song.name}}</h1>
          <span class="desc">{{getDesc(song)}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default() {
        return []
      }
    },
    subCount: {
      type: Number,
      default: 0
    },
    rank: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getDesc(song) {
      return `${song.artist} - ${song.album}`
    },
    selectItem(item, index) {
      this.$emit('select', item, index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .song-list
    .header
      display: flex
      width: 100%
      margin: 6px 5px 18px 0
      height: 40px
      align-items: center
      .fa
        padding: 12px
        font-size: 20px
      .text
        flex: 1
        font-size: 16px
        font-weight: bold
      .favor
        flex 0 0 115px
        width: 115px
        line-height: 40px
        text-align: center
        background: linear-gradient(left, rgba(255,88,72,.8), rgb(255,33,22))
        border-radius: 25px
        color: #fefefe
        font-size: 12px
    .item
      display: flex
      padding: 0 20px 20px 0
      .rank
        font-size: 14px
        color: $color-text-l
        padding: 12px
      .content
        display: flex
        flex: 0 0 250px
        flex-direction: column
        no-wrap()
        .text
          font-size: 16px
          padding: 4px
        .desc
          padding: 4px
          font-size: 12px
          color: $color-text-l
          no-wrap()
</style>
