import Popup from './index.vue';

/* istanbul ignore next */
Popup.install = function(Vue) {
  Vue.component(Popup.name, Popup);
};

export default Popup;
