import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  authRoutes
} from './router.js'
Vue.use(Vuex)
//将后台返回的menuList格式化为树结构
const formatMenuList = (menuList) => {
  const authArr = []
  //首先找到根元素
  function r(pid) {
    return menuList.filter(item => {
      if (item.pid === pid) {
        authArr.push(item.auth)
        //item.children = r(item.id).length ? r(item.id) : null
        let children = r(item.id)
        item.children = children.length ? children : null
        return true
      }
    })
  }
  return {
    menuList: r(-1),
    authArr
  }
}
//筛选出需要的权限路由(动态路由里name属性值是否包含在权限列表里)
const getNeedRoutes = (authList) => { //形参为权限列表
  function findWhichOne(authRoutes) { //形参为需要权限的路由
    return authRoutes.filter(item => {
      if (authList.includes(item.name)) {
        if (item.children && item.children.length) {
          item.children = findWhichOne(item.children)
        }
        return true
      }
    })
  }
  return findWhichOne(authRoutes)
}

export default new Vuex.Store({
  //将用户菜单数据存放在state中 不要放在本地缓存中
  state: {
    menuList: [],
    authList: [], //对应的权限列表
    abc: ''
  },
  getters: {

  },
  mutations: {
    updateMenuList(state, {
      menuList,
      authArr
    }) {
      state.menuList = menuList
      state.authList = authArr
    },
    TEST(state, {
      data
    }) {
      console.log('TEST', state.abc)
      state.abc = data
    }
  },
  actions: {
    async getMenuList({
      commit
    }) {
      const {
        data
      } = await axios.get('/api/menuList')
      const {
        menuList,
        authArr
      } = formatMenuList(data.menuList)
      console.log('menuList', menuList);
      commit('updateMenuList', {
        menuList,
        authArr
      })
    },
    async getAuthRoute({
      commit,
      state
    }) {
      //将所有的权限路由与权限列表作比较,根据权限列表筛选出应该显示的权限路由
      const needRoutes = getNeedRoutes(state.authList)
      console.log('needRoutes', needRoutes)
      return needRoutes
    },
    test({
      commit
    }, data) {
      commit('TEST', {
        data
      })
    }
  },

})
//在使用vueX中 state中的属性只有去读的时候才会有值，如果只取不读的话 store.state.xxxx = undefined