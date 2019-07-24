<template>
  <div class="find">
    <div class="box-wrapper">
      <search-box></search-box>
    </div>
    <div class="banner-wrapper">
      <banner :banners="banners"></banner>
    </div>
    <div class="menu-wrapper">
      <circle-menu></circle-menu>
    </div>
  </div>
</template>

<script>
import { getBanners } from 'api/recommend'
import Banner from 'components/banner/banner'
import SearchBox from 'components/search-box/search-box'
import CircleMenu from 'components/circle-menu/circle-menu'

export default {
  data() {
    return {
      banners: []
    }
  },
  created () {
    this._getBanners()
  },
  methods: {
    _getBanners() {
      getBanners().then((res) => {
        this.banners = res.banners
      })
    }
  },
  components: {
    Banner,
    SearchBox,
    CircleMenu
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .box-wrapper
    margin: 20px
  .banner-wrapper
    margin: 0 auto
    width: 350px
</style>
