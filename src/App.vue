<template>
  <div id="app">
    <router-view/>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import FootNav from 'components/foot-nav/foot-nav'
export default {
  name: 'App',
  components: {
    FootNav
  }
}
</script>

<style>
</style>
