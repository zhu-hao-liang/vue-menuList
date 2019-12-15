import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
//404页面
const notFound =  {
  path: '*',
  name: 'notFound',
  component: () => import('./views/404.vue'),
}
//只要路由切换就会触发该钩子函数
router.beforeEach(async (to, from, next) => {
  console.log('123');
  //debugger
  console.log(store.state.menuList, store.state.abc)
  //当前用户是否获取过权限，如果获取了，就不再获取了
  if (!store.state.menuList.length) {
    await store.dispatch('getMenuList')//将菜单列表存放在state中
    const neddRoutes = await store.dispatch('getAuthRoute')//获取需要的权限路由
    neddRoutes.push(notFound)
    router.addRoutes(neddRoutes)
    next({ ...to, replace: true }) // hack方法 确保addRoutes完成后在跳转 replace: true,相当于history.replace(),
  } else {//如果已经获取过权限，直接放行
    next()
  }
})

// 自定义指令
//customLoading为自定义指令的名字
//update为自定义指令的参数，当更新的时候会执行这个方法，它可以接受很多参数
//但我们这里只需要用到两个：el获取当前DOM，value获取当前指令的参数值
import '@/css/loading.css';
Vue.directive('customLoading',{
  update:function (el,value) {
    if(value.value){
      console.log(el);
      const canPush = el.getElementsByClassName("customLoading");
      if(canPush.length!=0){
        return
      }
      el.style.position = "relative"
      const para = document.createElement("div");
      const i_son = document.createElement("i");
      para.setAttribute("class","customLoading");
      i_son.setAttribute("class","fa fa-refresh fa-lg refleash");
      para.appendChild(i_son)
      el.appendChild(para)
    }else{
      for (var i = 0; i < el.childNodes.length; i++) {
        if(el.childNodes[i].className == 'customLoading'){
          const childNodes = el.getElementsByClassName("customLoading")[0];
          el.removeChild(childNodes)
          break
        }
      }
    }
  }
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
