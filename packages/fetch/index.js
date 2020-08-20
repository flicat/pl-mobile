/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/7/28 028
 * @description api 接口
 */
import request from './fetch'

const API = {}
const defaultConfig = {}

function getHandler (options) {
  let handler = function (data, params) {
    return request(Object.assign({}, defaultConfig, handler.options, params, {data}))
  };
  // url 拼接
  handler.url = function (...args) {
    handler.options.url = [options.url, ...args].join('/')
    return handler
  };
  // 修改默认头部
  handler.headers = function (headers) {
    handler.options.headers = headers
    return handler
  };
  // 强制为get请求
  handler.get = function (data) {
    handler.options.method = 'get'
    return handler(data)
  };
  // 强制为post请求
  handler.post = function (data) {
    handler.options.method = 'post'
    return handler(data)
  };

  // 默认请求配置
  handler.options = {...options}

  return handler
}

export default function (Vue) {
  Vue.prototype.$fetch = API

  // 设置默认配置信息
  Vue.prototype.$fetchConfig = function (config) {
    Object.assign(defaultConfig, config)
  }

  // 定义接口列表
  Vue.prototype.$fetchDefine = function (target, namespace) {
    let api = API
    if (namespace && typeof namespace === 'string') {
      API[namespace] = {}
      api = API[namespace]
    }

    Object.keys(target).forEach(name => {
      api[name] = getHandler(target[name])
    })
  }
}
