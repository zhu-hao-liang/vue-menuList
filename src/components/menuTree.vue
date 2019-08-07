<template>
  <div>
    <template v-for="(item, index) in menuList">
      <el-submenu :index="item.path" :key="item.auth" v-if="item.children">
        <template slot="title">
          <i class="el-icon-location"></i>
           <span>{{item.name}}</span>
          <!-- <router-link :to="item.path">
            <span>{{item.name}}</span>
          </router-link> -->
        </template>
        <!-- 递归组件 -->
        <menuTree :menuList="item.children"/>
      </el-submenu>
      <el-menu-item :index="item.path" :key="item.auth" v-else>
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name: "menuTree",
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  }
};
</script>
