const API = {
  /**
   * ======================
   * 发现页面
   * ======================
   */
  find: {
    // 轮播图
    BANNER_LIST: `/banner`
  },
  playlist: {
    // 获取推荐歌单
    RECOMMEND_LISTS: `/personalized`,
    // 获取歌单分类
    PLAYLIST_CATEGORIES: `/playlist/catlist`,
    // 获取某一分类下的歌单
    PLAYLIST_OF_CAT: `/top/playlist?cat=`
  }
}

export default API
