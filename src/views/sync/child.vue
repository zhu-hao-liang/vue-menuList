<template>
  <div class="scroll" :style="style" ref="_scroll">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "yellow"
    },
    value: {
      type: Number,
      default: 0
    },
    target: {
      type: Number,
      default: 500
    }
  },
  mounted() {
   //单向数据流 子组件不可以改变父组件传递过来的数据 子组件通知父亲 父亲更新位置，在传递给儿子
    const ball = this.$refs._scroll;
    let left = this.value;
    let timer = null;
    const getPosition = () => {
      if (this.target < left) {
        cancelAnimationFrame(timer)
        return
      }
      left += 1;
    //   this.$emit('input',left)
    this.$emit('update:value',left)
      ball.style.transform = `translate(${left}px)`;
      timer = requestAnimationFrame(getPosition);
    }
    getPosition()
  },
  computed: {
    style() {
      return {
        backgroundColor: this.color
      };
    }
  },
  methods: {
     
  }
};
</script>
<style>
.scroll {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  position: relative;
}
</style>