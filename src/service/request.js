import axios from 'axios'

const BASE_URL = process.env.BASE_URL;
const TIMEOUT = 200000;

const instance = axios.create({    // 创建axios实例，在这里可以设置请求的默认配置
  timeout: TIMEOUT, // 设置超时时间
  baseURL: BASE_URL // 根据自己配置的反向代理去设置不同环境的baeUrl
})

// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
instance.defaults.headers.post['Content-Type'] = 'application/json'

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
  
  // hide = message.loading({content: 'Loading...', duration: 0});
  // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
  // if (config.url.includes('pur/contract/export')) {
  //   config.headers['responseType'] = 'blob'
  // }
  // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
  // if (config.url.includes('pur/contract/upload')) {
  //   config.headers['Content-Type'] = 'multipart/form-data'
  // }
  config.headers['Authorization'] = 'Token ' + sessionStorage.getItem('userToken') || ''

  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
  console.log({ response })

  const result = response.data

  if (result.success === true) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response.data.message)
  }
}, error => {
  if (error.response) {
    if (error.response.status === 401) {    // token或者登陆失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
    }
    return Promise.reject(error)
  } else {
    return Promise.reject('请求超时, 请刷新重试')
  }
})


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