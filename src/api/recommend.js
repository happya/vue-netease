import API from 'api/index'
import Http from 'api/config'

export function getBanners() {
  const url = API.find.BANNER_LIST
  return new Promise((resolve, reject) => {
    Http.get(url).then((res) => {
      resolve(res.data)
    }, (err) => {
      reject(err)
    })
  })
}

export function getAPIData(url) {
  return new Promise((resolve, reject) => {
    Http.get(url).then((res) => {
      resolve(res.data)
    }, (err) => {
      reject(err)
    })
  })
}
