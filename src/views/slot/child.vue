<template>
    <div>
      <slot>Submit</slot>


        <!-- 具名插槽 -->
       <slot name="header"></slot>


        <!-- 利用插槽与父组件之间的通信  -->
       <template v-for="(item, index) in data">
        <slot name="footer" :item="item" a="你好"></slot>
       </template>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Array
        }
    },
    mounted() {
        console.log(this.$router);
    }
}
</script>