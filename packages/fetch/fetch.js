/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/7/28 028
 * @description Description
 */

import 'whatwg-fetch'
import './polyfill-patch-fetch'
import {is} from '../../src/assets/utils'

/*
* @params {String} url                    请求URL地址
* @params {String} baseUrl                请求URL域名
* @params {String} method                 请求使用的方法，如 GET、POST
* @params {Object} data                   请求的数据：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象
* @params {Object} headers                请求的头信息
* @params {String} type                   请求的数据类型：json、blob、arrayBuffer、formData、text
* @params {String} mode                   请求的模式，如 cors、 no-cors 或者 same-origin
* @params {String} credentials            请求的 credentials，如 omit、same-origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项
* @params {String} cache                  请求的 cache 模式: default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached
* @params {AbortController} signal        AbortSignal 接口表示一个信号对象（ signal object ），它允许您通过 AbortController 对象与DOM请求（如Fetch）进行通信并在需要时将其中止。
* @params {Function} onDownload           onDownload 回调方法
* */
export default function ({url, baseUrl, method = 'POST', data, headers = {}, type = 'json', mode, credentials, cache = 'no-cache', signal, onDownload, redirect}) {
  // 请求地址
  let requestUrl = /^https?:\/\//.test(url) ? url : [baseUrl.replace(/\/$/, ''), url.replace(/^\//, '')].join('/')

  // fetch配置信息
  let param = {
    method: String(method).toUpperCase(),
    headers: Object.assign({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }, headers),
    mode,
    credentials,
    cache,
    signal
  }

  if (!is(data, 'null', 'undefined')) {
    if (param.method === 'GET') {
      let searchParam
      if (is(data, 'object')) {
        // get 请求参数转换
        searchParam = Object.keys(data).map(name => [name, encodeURIComponent(data[name])].join('=')).join('&')
      } else {
        // 字符串拼接
        searchParam = JSON.stringify(data)
      }
      requestUrl = [requestUrl, searchParam].join(/\?/.test(requestUrl) ? '&' : '?')
    } else {
      param.body = data

      // 如果是formData则由浏览器设置 Content-Type
      if (is(data, 'formdata')) {
        delete param.headers['Content-Type'];
      }

      // url则传递字符串
      if (is(data, 'urlsearchparams')) {
        param.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
        param.body = data.toString()
      }

      // 对象则默认传递json
      if (is(data, 'array', 'object')) {
        param.headers['Content-Type'] = 'application/json;charset=utf-8'
        param.body = JSON.stringify(data)
      }
    }
  } else {
    delete param.headers['Content-Type'];
  }

  if (redirect) {
    // 如果是重定向则直接跳转
    setTimeout(() => {
      window.location = requestUrl
    }, 0)
    return Promise.resolve()
  } else {
    return fetch(requestUrl, param).then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res
      }
      const error = new Error(res.statusText)
      error.response = res
      throw error
    }).then(res => {
      // 进度回调
      if (typeof onDownload === 'function') {
        let resCopy = res.clone()
        let loaded = 0
        const total = Number(resCopy.headers.get('content-length')) || 0
        const reader = resCopy.body.getReader()
        const read = () => {
          reader.read().then(({value, done}) => {
            if (done) {
              return
            }
            loaded += value.length
            onDownload(loaded, total, resCopy)
            read()
          })
        }
        read()
      }

      return res
    }).then(res => {
      // 根据请求类型返回数据
      if (typeof res[type] === 'function') {
        return res[type]()
      } else {
        // 默认返回json
        return res.json()
      }
    }).catch(e => {
      if (e.name !== 'AbortError') {
        return Promise.reject(e)
      }
    })
  }
}
