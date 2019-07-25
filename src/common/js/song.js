// 根据请求到的歌曲信息，封装一个song的类，便于程序中调用

export default class Song {
  constructor({ id, artist, name, album, albumid, image }) {
    this.id = id // 歌曲id, 唯一标识
    this.name = name // 音乐名
    this.artist = artist // 艺术家，可能有多个
    this.album = album // 专辑名称
    this.albumid = albumid
    this.image = image // 歌曲封面
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.id,
    name: musicData.name,
    artist: filterArtist(musicData.ar),
    album: musicData.al.name,
    albumid: musicData.al.id,
    image: musicData.al.picUrl
  })
}

export function filterArtist(artists) {
  if (!artists) {
    return ''
  }
  const ret = []
  artists.forEach((artist) => {
    ret.push(artist.name)
  })
  return ret.join('/')
}
