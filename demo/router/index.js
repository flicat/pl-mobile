import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = file => () => import('../components/' + file + '.vue')

const router = new Router({
  mode: 'hash',
  routes: [
    {path: '/', redirect: {name: 'button'}},
    {path: '/button', component: _import('button'), name: 'button'},
    {path: '/cell', component: _import('cell'), name: 'cell'},
    {path: '/checkbox', component: _import('checkbox'), name: 'checkbox'},
    {path: '/collapse', component: _import('collapse'), name: 'collapse'},
    {path: '/datetime', component: _import('datetime'), name: 'datetime'},
    {path: '/form', component: _import('form'), name: 'form'},
    {path: '/goTopButton', component: _import('goTopButton'), name: 'goTopButton'},
    {path: '/icon', component: _import('icon'), name: 'icon'},
    {path: '/input', component: _import('input'), name: 'input'},
    {path: '/list', component: _import('list'), name: 'list'},
    {path: '/loading', component: _import('loading'), name: 'loading'},
    {path: '/message', component: _import('message'), name: 'message'},
    {path: '/picker', component: _import('picker'), name: 'picker'},
    {path: '/progress', component: _import('progress'), name: 'progress'},
    {path: '/radio', component: _import('radio'), name: 'radio'},
    {path: '/range', component: _import('range'), name: 'range'},
    {path: '/select', component: _import('select'), name: 'select'},
    {path: '/steps', component: _import('steps'), name: 'steps'},
    {path: '/swipe', component: _import('swipe'), name: 'swipe'},
    {path: '/tabs', component: _import('tabs'), name: 'tabs'},
    {path: '/upload', component: _import('upload'), name: 'upload'}
  ]
})

export default router
