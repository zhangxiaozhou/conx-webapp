import axios from 'axios'
 
const BASE_URL = process.env.BASE_URL;
const TIMEOUT = 5000;
 
const instance = axios.create({    // 创建axios实例，在这里可以设置请求的默认配置
  timeout: TIMEOUT, // 设置超时时间
  baseURL: BASE_URL // 根据自己配置的反向代理去设置不同环境的baeUrl
})
 
// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
instance.defaults.headers.post['Content-Type'] = 'application/json'

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
        method: 'get',
        url,
        params,
        ...config
    }).then(response => {
        resolve(response)
    }).catch(error => {
        reject(error)
    })
  })
}
 
/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}