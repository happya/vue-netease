<template>
    <div class="search-box">
    <i class="fa fa-search"></i>
    <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    placeholder: {
      type: String,
      default: '大家都在搜'
    }
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    clear() {
      this.query = ''
    },
    setQuery(query) {
      this.query = query
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .search-box
    display: flex
    align-items: center
    justify-content: center
    width: 80%
    margin: 2px auto
    height: 36px
    border-radius: 20px
    box-sizing: border-box
    background: $color-background
    .fa
      color: $color-text-ll
      font-size: 14px
    .box
      line-height: 18px
      background: $color-background
      outline: 0
      &::placeholder
        color: $color-text-l
        font-size: $font-size-normal
        text-align: center
</style>
