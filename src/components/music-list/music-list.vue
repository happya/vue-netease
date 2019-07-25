<!--
  --------------------------------
  -----------歌单详情页面------------
  ---格式为上面图片，下面歌曲列表，可复用
  ----------------------------------
  -->
<template>
  <div class="music-list" v-show="songs.length">
    <!--专辑/歌单/碟片/排行榜封面与描述-->
    <cover :title="title"
           :coverName="coverName"
           :bgImage="bgImage"
           :creator="creator"
           :description="description"
           class="cover"
    ></cover>
    <!--歌曲列表-->
    <scroll class="list"
            :data="songs"
            ref="list"
    >
      <div class="songs-wrapper">
        <song-list :songs="songs" :subCount="subCount"></song-list>
      </div>
    </scroll>

  </div>
</template>

<script>
import SongList from 'components/base/song-list'
import Scroll from 'components/base/scroll'
import Cover from 'components/base/cover'
// import { prefixStyle } from 'common/js/dom'
// const transform = prefixStyle('transfrom')

export default {
  props: {
    // 用于cover的
    coverName: {
      type: String,
      default: '歌单'
    },
    title: {
      type: String,
      default: ''
    },
    bgImage: {
      type: String,
      default: ''
    },
    creator: {
      type: Object,
      default() {
        return {}
      }
    },
    description: {
      type: String,
      default: ''
    },
    // 用于song-list的
    rank: {
      type: Boolean,
      default: false
    },
    songs: {
      type: Array,
      default() {
        return []
      }
    },
    subCount: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    // this.$refs.bgImage.style[transform] = `scale(1.5)`
  },
  components: {
    SongList,
    Scroll,
    Cover
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable.styl'
  @import '~common/stylus/mixin'
  .music-list
    position: fixed
    z-index: 100
    top: 0
    bottom: 50px
    left: 0
    right: 0
    background: $color-background-l
    .list
      position: absolute
      top: 230px
      bottom: 0px
      width: 100%
      overflow: hidden
</style>
