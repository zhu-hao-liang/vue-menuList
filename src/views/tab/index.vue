<template>
  <div id="app">
    <ul>
      <li
        v-for="(tab,index) in tabs"
        @click="toggle(index,tab.view)"
        :class="{active:active==index}"
        :key="index"
      >{{tab.type}}</li>
    </ul>
    <!--:is实现多个组件实现同一个挂载点-->
    <component :is="currentView"></component>
  </div>
</template>

<<script>
import tab1 from './tab1.vue'
import tab2 from './tab2.vue'
import tab3 from './tab3.vue'
import tab4 from './tab4.vue'
export default {
  name: 'app',
  data(){
    return {
      active:0,
      currentView:'tab1',
      tabs:[
        {
          type:'tab1',
          view:'tab1'
        },
        {
          type:'tab2',
          view:'tab2'
        },
        {
          type:'tab3',
          view:'tab3'
        },
         {
          type:'tab4',
          view:'tab4'
        }
      ]
    }
  },
  methods:{
    toggle(i,v){
      this.active=i;
      this.currentView=v;
    }
  },
  components:{
    tab1,
    tab2,
    tab3,
    tab4
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
ul {
  width: 200px;
  display: flex;
}
ul li {
  width: 100px;
  height: 40px;
  background: #ccc;
  display: inline-flex;
  border-right: 1px solid #ddd;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
ul li.active {
  background: #333;
}
</style>
