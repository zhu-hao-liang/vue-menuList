<template>
<div>
    <button @click="test">测试</button>
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</div>
</template>
<script>
// @ is an alias to /src
import {mapState} from 'vuex'
import MenuTree from '@/components/menuTree'
export default {
  name: 'home',
  mounted() {
    console.log(this.$store.state);
  },
  computed: {
     ...mapState(['menuLlist'])
   
  },
  methods: {
      test() {
            console.log('test')
            this.$store.dispatch('test','zhu')
        }
  },
  components: {
    MenuTree
  }
}
</script>
