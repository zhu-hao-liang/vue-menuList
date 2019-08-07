import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
//公共路由
export const defaultRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('./views/404.vue'),
  },
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