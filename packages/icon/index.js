import Icon from './index.vue';

// iconfont 阿里cdn地址
const cndList = [
  '//at.alicdn.com/t/font_1060557_knznc0n8ise.js',        // 系统公共图标
];

cndList.forEach(src => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  document.body.appendChild(script);
})

/* istanbul ignore next */
Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;
