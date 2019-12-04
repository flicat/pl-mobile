/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/8/2 002
 * @description Description
 */
let userAgent = window.navigator.userAgent;

export default {
  isFromAndroid: /android/gi.test(userAgent),                             // 安卓
  isFromIos: /iphone|ipod|ios/gi.test(userAgent),                         // 苹果设备
  isFromWx: /MicroMessenger/gi.test(userAgent),                           // 微信
  isFromQQ: /mobile.*qq/gi.test(userAgent),                               // QQ
  isFromUC: /ucbrowser/gi.test(userAgent),                                // UC
  isFromQQBrower: /mqqbrowser[^LightApp]/gi.test(userAgent),              // QQ浏览器
  isFromQQBrowerLight: /MQQBrowserLightApp/gi.test(userAgent)             // QQ内置浏览器
}
