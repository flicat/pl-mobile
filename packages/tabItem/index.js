import TabItem from '../tabs/tab-item.vue';

/* istanbul ignore next */
TabItem.install = function(Vue) {
  Vue.component(TabItem.name, TabItem);
};

export default TabItem;
