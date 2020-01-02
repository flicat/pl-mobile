import Vue from 'vue'
import Router from 'vue-router'
import platform from '../assets/js/platform'

Vue.use(Router)

const components = [
  {name: 'button', title: 'button 按钮'},
  {name: 'cell', title: 'cell 布局'},
  {name: 'checkbox', title: 'checkbox 多选框'},
  {name: 'collapse', title: 'collapse 折叠面板'},
  {name: 'datetime', title: 'datetime 时间选择框'},
  {name: 'form', title: 'form 表单'},
  {name: 'goTopButton', title: 'goTopButton 返回顶部'},
  {name: 'icon', title: 'icon 图标'},
  {name: 'input', title: 'input 输入框'},
  {name: 'list', title: 'list 列表'},
  {name: 'loading', title: 'loading 加载提示'},
  {name: 'message', title: 'message 消息提示'},
  {name: 'picker', title: 'picker 联动菜单'},
  {name: 'popup', title: 'popup 弹出框'},
  {name: 'progress', title: 'progress 进度条'},
  {name: 'radio', title: 'radio 单选框'},
  {name: 'range', title: 'range 范围选择框'},
  {name: 'select', title: 'select 下拉菜单'},
  {name: 'steps', title: 'steps 步骤条'},
  {name: 'swipe', title: 'swipe 轮播图'},
  {name: 'tabs', title: 'tabs 标签页'},
  {name: 'upload', title: 'upload 文件上传'}
]

const isFromMobile = platform.isFromAndroid || platform.isFromIos

const importDoc = file => () => import('../../docs/' + file + '.md')
const importExample = file => () => import('../components/' + file + '.vue')

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: {name: 'docs'},
      component: () => import('../layout/index.vue'),
      children: [
        {
          path: '/docs',
          name: 'docs',
          redirect: {name: 'home'},
          component: () => import('../layout/docs.vue'),
          children: [
            {path: '/docs/home', component: () => import('../../README.md'), name: 'home', meta: {title: '介绍', type: 'docs'}},
            ...components.map(router => {
              return {
                path: `/docs/${router.name}`,
                component: importDoc(router.name),
                name: `doc_${router.name}`,
                meta: {title: router.title, name: router.name, type: 'docs'}
              }
            }),
          ]
        },
        {
          path: '/examples',
          name: 'examples',
          redirect: {name: `examples_${components[0].name}`},
          component: () => import('../layout/examples.vue'),
          children: components.map(router => {
            return {
              path: `/examples/${router.name}`,
              component: importExample(router.name),
              name: `examples_${router.name}`,
              meta: {title: router.title, name: router.name, type: 'examples'}
            }
          })
        }
      ],
      beforeEnter (to, from, next) {
        if (isFromMobile && to.meta.type !== 'examples') {
          next({name: ['examples', to.meta.name].filter(Boolean).join('_')})
        } else {
          next()
        }
      }
    }
  ]
})

export default router
