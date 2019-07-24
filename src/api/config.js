// const debug = process.env.NODE_ENV !== 'production'
import axios from 'axios'
export const MUSIC_API_URL = 'http://localhost:3000'

const Http = axios.create({
  baseURL: MUSIC_API_URL,
  timeout: 15000,
  withCredentials: true,
  params: {
    ts: new Date().getTime()
  }
})

// 请求
Http.interceptors.request.use(function(req) {
  return req
}, function(err) {
  return Promise.reject(err)
})

// 响应
Http.interceptors.response.use((res) => {
  if (res.data.code === 200 || 'success' in res.data) {
    return Promise.resolve(res)
  }
}, (err) => {
  return Promise.reject(err)
})

export default Http
