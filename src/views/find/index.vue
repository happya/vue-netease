<template>
  <div class="find">
    <div class="box-wrapper">
      <search-box></search-box>
    </div>
    <div class="list-wrapper">
      <scroll :data="data" class="scroll-list">
        <div>
          <div class="banner-wrapper">
            <banner :banners="banners"></banner>
          </div>
          <circle-menu :menu="icons"></circle-menu>
          <disc :data="discs" @select="selectItem"></disc>
        </div>
      </scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getBanners, getAPIData } from 'api/recommend'
import API from 'api/index'
import Banner from 'components/banner/banner'
import SearchBox from 'components/search-box/search-box'
import CircleMenu from 'components/circle-menu/circle-menu'
import Disc from 'components/disc/disc'
import Scroll from 'components/base/scroll'

export default {
  data() {
    return {
      banners: [],
      discs: [],
      icons: [
        {
          name: '每日推荐',
          icon: 'fa fa-calendar'
        }, {
          name: '歌单',
          icon: 'fa fa-newspaper-o'
        }, {
          name: '排行榜',
          icon: 'fa fa-signal'
        }, {
          name: '电台',
          icon: 'fa fa-podcast'
        }, {
          name: '直播',
          icon: 'fa fa-video-camera'
        }
      ]
    }
  },
  computed: {
    data() {
      // return this.banners.concat(this.icons.concat(this.discs))
      const data = []
      data.push(...this.banners, ...this.icons, ...this.discs)
      return data
    }
  },
  created () {
    this._getBanners()
    this._getRecommendList()
  },
  methods: {
    selectItem(item) {
      this.$router.push({
        path: `/find/${item.id}`
      })
      this.setDisc(item)
    },
    _getBanners() {
      getBanners().then((res) => {
        this.banners = res.banners
      })
    },
    _getRecommendList() {
      const url = API.playlist.RECOMMEND_LISTS
      getAPIData(url).then((res) => {
        this.discs = res.result.slice(0, 6)
      })
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  },
  components: {
    Banner,
    SearchBox,
    CircleMenu,
    Disc,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .find
    position: relative
    .box-wrapper
      position: relative
      width: 100%
      margin: 20px auto
    .list-wrapper
      position: fixed
      left: 0
      top: 80px
      bottom: 50px
      .scroll-list
        height: 100%
        overflow: hidden
        .banner-wrapper
          margin: 0 auto
          width: 350px
</style>
