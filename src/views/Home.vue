<template>
<div>
    <button @click="test">测试</button>
    <span>{{abc}}</span>
     <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :router="true"
      >
      <MenuTree :menuList='menuList'/>
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
     ...mapState(['menuList', 'abc'])
   
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
