<template>
  <div>
    <h1>tab1</h1>
    <input type="text" v-model="value1" />
    <input type="text" v-model="value2" />
    <input type="text" v-model="value3" />
    <span>{{msg | capitalize}}</span>


<el-row :gutter="20" style="0 20px">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>


  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  computed: {
    // handleValue() {
    //   const arr = [this.value1, this.value2, this.value3];
    // }
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "", 
      msg: 'zhuhaolaing'
    };
  },
  created() {},
  mounted() {},
  methods: {},
  activited() {},
  beforeRouteUpdate() {},
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  watch: {
    value1(newValue, oldValue) {
      if (newValue === this.value2 || newValue === this.value3) {
        alert("不能输入相同的值");
      }
    },
    value2(newValue, oldValue) {
      if (newValue === this.value1 || newValue === this.value3) {
        alert("不能输入相同的值");
      }
    },
    value3(newValue, oldValue) {
      if (newValue === this.value1 || newValue === this.value2) {
        alert("不能输入相同的值");
      }
    }
  }
};
</script>

<style lang="scss" scoped>


  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 360px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
