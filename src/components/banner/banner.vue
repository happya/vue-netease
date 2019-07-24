<template>
  <div class="swipers">
    <swiper :options="swiperOption" v-show="showSwiper">
      <swiper-slide v-for="(item,index) of banners" :key="index">
          <img class="swiper-img" :src="item.imageUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    showSwiper() {
      return this.banners.length
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000,
        speed: 1000,
        initialSlide: 1
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable.styl'
  .swipers >>> .swiper-pagination-bullet-active
    background: $color-theme
  .swipers >>> .swiper-container
    border-radius: 10px
  .swipers
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 38.4%
    .swiper-img
      width: 100%
</style>
