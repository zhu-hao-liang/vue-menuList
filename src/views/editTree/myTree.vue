<template>
   <el-tree :data="data" 
   default-expand-all
   :render-content="render"
   ></el-tree>
</template>

<script>
export default {
  props: {
    myData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    
  },
  methods: {
    //格式换数据
    formatData(data) {
      debugger
      function r(pid) {
        return data.filter(item => {
          if (pid === item.pid) {
             item.children = r(item.id).length ? r(item.id) : null
             return true;
          }
        });
      }
      return r(0)
    },
    //克隆
    deepClone(value) {
      return JSON.parse(JSON.stringify(value))
    },
    render(h, { node, data, store }) {
      console.log(node, data.name);
       return (<div>{data.name}</div>)
    }
  },
  watch: {
    myData(value) {
      console.log('myData');
      const newValue = this.deepClone(value)
      this.data = this.formatData(newValue)
    }
  }

};
</script>

<style lang="scss" scoped>
</style>
