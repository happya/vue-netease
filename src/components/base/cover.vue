<template>
  <div class="cover-wrapper">
    <!--虚化的背景图，会根据父级元素的大小撑开-->
    <div class="background" :style="bgStyle" ref="bgImage"></div>
    <!--顶部标题-->
    <div class="title">
      <i class="fa fa-angle-left" @click="back"></i>
      <div class="text">{{coverName}}</div>
    </div>
    <!--歌单描述-->
    <div class="head-container">
      <!--封面图-->
      <div class="coverImg">
        <img :src="bgImage">
      </div>
      <!--详情描述-->
      <div class="details">
        <!--歌单名称-->
        <h1 class="name">{{title}}</h1>
        <!--歌单创建者-->
        <div class="author">
          <div class="avatar">
            <img :src="creator.avatarUrl">
          </div>
          <span class="nickname">{{creator.nickname}}</span>
          <i class="fa fa-angle-right"></i>
        </div>
        <!--歌单介绍-->
        <div class="desc">
            <span class="text">{{description}}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    }
  },
  computed: {
    bgStyle() {
      return `background-image:url(${this.bgImage}?param=170y170)`
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .cover-wrapper
    position: relative
    overflow: hidden
    .background
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      width: 100%
      tranform: scale(1.5)
      filter: blur(20px)
      background-size: cover
      background-position: 50%
      z-index: -1
    .title
      position: relative
      margin: 15px
      display: flex
      align-items: center
      color: #eee
      .fa
        font-size: 24px
      .text
        flex: 1
        align-items: center
        text-align: center
        font-size: 18px
    .head-container
      display: flex
      padding: 0px 16px 30px 16px
      .coverImg
        width: 140px
        height: 140px
        flex: 0 0 140px
        img
          width: 100%
          border-radius: 5px
      .details
        display: flex
        padding-left: 20px
        flex-direction: column
        align-items: left
        .name
          display: flex
          padding-right: 10px
          font-size: 17px
          color: #fefefe
          line-height: 24px
        .author
          display: flex
          align-items: center
          padding: 10px 10px 12px 0
          .avatar
            display: inline-block
            width: 30px
            height: 30px
            img
              width: 100%
              border-radius: 50%
          .nickname
            display: inline-block
            padding-left: 6px
            line-height: 30px
            color: $color-text-desc
            font-size: $font-size-normal
          .fa
            font-size: 20px
            padding-left: 10px
            color: $color-text-desc
        .desc
          display: flex
          align-items: center
          .text
            flex: 1
            max-width: 160px
            line-height: 20px
            font-weight: 1.5px
            font-size: 12px
            color: $color-text-desc
            no-wrap-line(2)
          .fa
            align-items: center
            padding-left: 10px
            font-size: 20px
            color: $color-text-desc
</style>
