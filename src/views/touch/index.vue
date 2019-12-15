<template>
  <div>
    // 将你要实现左划右划的div块包裹起来
    <!-- v-touch 默认派发 swipeleft事件 和 swiperight事件-->
   <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
      <div class="menu-container" ref="menuContainer" style="width: 80%; height: 100px; background: pink">    
    <!-- 这个是内容 -->  
      </div>
  </v-touch>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  computed: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    swiperleft() {
     console.log('swiperLeft');
    },
    swiperright() {
     console.log('swiperRight');
    }
  },
  activited() {},
  beforeRouteUpdate() {},
  filters: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
</style>
