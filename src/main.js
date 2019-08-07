import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

//只要路由切换就会触发该钩子函数
router.beforeEach(async (to, from, next) => {
  console.log(store)
  //当前用户是否获取过权限，如果获取了，就不再获取了
  if (!store.state.menuList.length) {
    await store.dispatch('getMenuList')//将菜单列表存放在state中
    const neddRoutes = await store.dispatch('getAuthRoute')//获取需要的权限路由
    router.addRoutes(neddRoutes)
    next({ ...to, replace: true }) // hack方法 确保addRoutes完成后在跳转 replace: true,相当于history.replace(),
  } else {//如果已经获取过权限，直接放行
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')