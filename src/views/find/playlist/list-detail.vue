<template>
  <transition appear name="slide">
    <music-list :songs="songs"
                :creator="creator"
                :description="description"
                :title="title"
                :bgImage="bgImage"
                :coverName="coverName"
                :subCount="subCount"
    ></music-list>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAPIData } from 'api/config'
import API from 'api/index'
import { createSong } from 'common/js/song'
import MusicList from 'components/music-list/music-list'
export default {
  data() {
    return {
      songs: [],
      creator: {},
      description: '',
      coverName: '歌单',
      subCount: 0
    }
  },
  computed: {
    title() {
      return this.disc.name
    },
    bgImage() {
      return this.disc.picUrl
    },
    ...mapGetters([
      'disc'
    ])
  },
  created() {
    this._getListDetail()
  },
  methods: {
    _getListDetail() {
      if (!this.disc.id) {
        this.$router.push(`/`)
        return
      }
      const url = API.playlist.PLAYLIST_DETAIL
      const data = Object.assign({}, {
        id: this.disc.id
      })
      getAPIData(url, data).then((res) => {
        const playlist = res.playlist
        this.songs = this._normalizeSongs(playlist.tracks)
        this.creator = playlist.creator
        this.description = playlist.description
        this.subCount = playlist.subscribedCount
        // console.log(this.songs)
      })
    },
    _normalizeSongs(list) {
      const ret = []
      list.forEach((musicData) => {
        if (musicData.id) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
