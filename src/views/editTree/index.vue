<template>
   <MyTree :myData="data"></MyTree>
</template>

<script>
import axios from "axios";
import MyTree from './myTree';
export default {
  components: {
    MyTree
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("http://localhost:3000/app").then(res => {
        const data = res.data;
        this.data = [...data.parent, ...data.child];
        this.data.forEach(item => item.label = item.name)
      });
    },
   
  }

};
</script>

<style lang="scss" scoped>
</style>
