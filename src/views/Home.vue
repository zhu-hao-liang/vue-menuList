<template>
  <div>
    <button @click="test">测试</button>
    <span>{{abc}}</span>
    <span>{{ABC}}</span>
    <el-button v-has="'edit'">编辑</el-button>
    <el-button v-has="'add'">添加</el-button>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true">
      <MenuTree :menuList="menuList" />
    </el-menu>
    <!-- 用来测试key的必要性 -->
    <div class="show" v-if="visibility" key='1'>
      <span>显示</span>
      <input type="text">
    </div>
    <div class="show" v-else key='2'>
      <span>隐藏key</span>
      <input type="text">
    </div>
    <button @click="toggle">测试key</button>
     <AA/>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
import MenuTree from "@/components/menuTree";
/* 
key的作用：在显示隐藏时，不加key保留之前的数据 加上key保证当前节点的唯一性
会重新渲染dom, 
key的作用主要是为了高效的更新虚拟DOM
尽量避免使用索引当作key
*/
export default {
  name: "home",
  directives: {
  has: {
   inserted(el, bindings, vnode) {
     let value = bindings.value;
     // 在vuex中查看是否有按钮权限
     let flag = vnode.context.$store.state.btnPermission[value];
     // 如果没有全选则将按钮删除即可
     !flag && el.parentNode.removeChild(el);
   }
  }
 },
  data() {
    return {
      num: 1,
      visibility: true
    };
  },
  mounted() {
    console.log(this.$store.state);
  },
  computed: {
    ...mapState(["menuList", "abc"]),
    ABC() {
      return this.abc;
    }
  },
  methods: {
    test() {
      this.num += 1;
      console.log(this.num);
      this.$store.dispatch("test", this.num);
    },
    toggle() {
      this.visibility = !this.visibility
    }
  },
  components: {
    MenuTree,
  }
};
</script>
