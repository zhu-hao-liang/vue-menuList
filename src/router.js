import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
//公共路由
export const defaultRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import('./views/sync/parent')
  },
  //测试render函数
  {
    path: '/list',
    name: 'list',
    component: () => import('./views/render/list')
  },
   //测试插槽组件
   {
    path: '/slot',
    name: 'slot',
    component: () => import('./views/slot/my-slot')
  },
  //  {
  //   path: '*',
  //   name: 'notFound',
  //   component: () => import('./views/404.vue'),
  // },
]
//需要权限的路由
export const authRoutes = [
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./views/menu/cart.vue'),
    children: [{
      path: 'cart-list',
      name: 'cart-list',
      component: () => import('./views/menu/cart-list.vue'),
      children: [{
          path: 'lottery',
          name: 'lottery',
          component: () => import('./views/menu/lottery.vue'),
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('./views/menu/product.vue'),
        },
      ]
    }]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('./views/menu/shop.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('./views/menu/profile.vue'),
  },
 
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: defaultRoutes
})
//注意 404 页面一定要放在异步路由的最后面，不可放在公共路由的后面，不然会导致刷新404的情况