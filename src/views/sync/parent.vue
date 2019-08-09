<template>
  <div>
      <!-- :xxx.sync = abc  $emit(update:xxx, data)  这也是父子组件同步数据的一种方式-->
      <Scroll color="red" :target="500" :value.sync="pos1">球1</Scroll>
    <!-- <Scroll color="red"  :target="500" v-model="pos1">球1</Scroll> -->
    <!-- <Scroll color="red" :value="pos1" :target="500" @input="input">球1</Scroll> -->
    <!-- <Scroll color="red" :pos="pos1" :target="500" @input="input">球1</Scroll> -->
    <Scroll color="pink" :value="pos2" :target="500">球2</Scroll>
    <Scroll>球3</Scroll>
    <button @click="fn">获取球1的位置</button>
  </div>
</template>
<script>
import Scroll from "./child";
export default {
  data() {
      return {
          pos1: 100,
          pos2: 200,
      }
  },
  components: {
    Scroll
  },
  methods: {
    fn() {
      console.log(this.pos1)
    },
    // input(value) {
    //    this.pos1 = value
    // }
  }
};
</script>
<style scoped>
</style>
