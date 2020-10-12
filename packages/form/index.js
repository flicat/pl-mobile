import Form from './index.vue';

/* istanbul ignore next */
Form.install = function(Vue) {
  Vue.component(Form.name, Form);
};

export default Form;
