import Canvas from './index.vue';

/* istanbul ignore next */
Canvas.install = function(Vue) {
  Vue.component(Canvas.name, Canvas);
};

export default Canvas;
