import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = file => ({
  docs: () => import('../../docs/' + file + '.md'),
  examples: () => import('../components/' + file + '.vue')
})

const router = new Router({
  mode: 'hash',
  routes: [
    {path: '/', redirect: {name: 'home'}},
    {path: '/home', components: {docs: () => import('../../README.md')}, name: 'home', meta: {title: '介绍'}},
    {path: '/button', components: _import('button'), name: 'button', meta: {title: 'button 按钮'}},
    {path: '/cell', components: _import('cell'), name: 'cell', meta: {title: 'cell 布局'}},
    {path: '/checkbox', components: _import('checkbox'), name: 'checkbox', meta: {title: 'checkbox 多选框'}},
    {path: '/collapse', components: _import('collapse'), name: 'collapse', meta: {title: 'collapse 折叠面板'}},
    {path: '/datetime', components: _import('datetime'), name: 'datetime', meta: {title: 'datetime 时间选择框'}},
    {path: '/form', components: _import('form'), name: 'form', meta: {title: 'form 表单'}},
    {path: '/goTopButton', components: _import('goTopButton'), name: 'goTopButton', meta: {title: 'goTopButton 返回顶部'}},
    {path: '/icon', components: _import('icon'), name: 'icon', meta: {title: 'icon 图标'}},
    {path: '/input', components: _import('input'), name: 'input', meta: {title: 'input 输入框'}},
    {path: '/list', components: _import('list'), name: 'list', meta: {title: 'list 列表'}},
    {path: '/loading', components: _import('loading'), name: 'loading', meta: {title: 'loading 加载提示'}},
    {path: '/message', components: _import('message'), name: 'message', meta: {title: 'message 消息提示'}},
    {path: '/picker', components: _import('picker'), name: 'picker', meta: {title: 'picker 联动菜单'}},
    {path: '/progress', components: _import('progress'), name: 'progress', meta: {title: 'progress 进度条'}},
    {path: '/radio', components: _import('radio'), name: 'radio', meta: {title: 'radio 单选框'}},
    {path: '/range', components: _import('range'), name: 'range', meta: {title: 'range 范围选择框'}},
    {path: '/select', components: _import('select'), name: 'select', meta: {title: 'select 下拉菜单'}},
    {path: '/steps', components: _import('steps'), name: 'steps', meta: {title: 'steps 步骤条'}},
    {path: '/swipe', components: _import('swipe'), name: 'swipe', meta: {title: 'swipe 轮播图'}},
    {path: '/tabs', components: _import('tabs'), name: 'tabs', meta: {title: 'tabs 标签页'}},
    {path: '/upload', components: _import('upload'), name: 'upload', meta: {title: 'upload 文件上传'}}
  ]
})

export default router
