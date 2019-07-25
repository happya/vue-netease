<template>
  <transition appear name="slide">
    <list-collection></list-collection>
    <router-view></router-view>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import ListCollection from 'components/list-collection/list-collection'
export default {
  computed: {
    ...mapGetters([
      'disc'
    ])
  },
  components: {
    ListCollection
  }
}
</script>

<style lang="stylus" scoped>
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
