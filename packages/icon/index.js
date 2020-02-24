import Icon from './index.vue';

require('./iconfont.js')

/* istanbul ignore next */
Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;
