<template>
    <div>
       <slot name="header"></slot>



       <template v-for="(item, index) in data">
        <slot name="footer" :item="item" a="你好"></slot>
       </template>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Number
        }
    }
}
</script>