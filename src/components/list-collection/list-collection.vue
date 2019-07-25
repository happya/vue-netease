<template>
  <div class="list-collection">
    <div class="title">
      <i class="fa fa-back"></i>
      <div class="text">歌单广场</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'disc'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable.styl'
  .playlist
    position: fixed
    top: 0
    bottom: 50px
    left: 0
    right: 0
    z-index: 50
</style>
