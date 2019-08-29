<template>
    <div>
        <p>父组件</p>
        <Child :data='data'>
            <!-- v-slot:header具名插槽 -->
            <template v-slot:header>
                <span>朱豪亮</span>
            </template>




            <!-- {item: 1, a: '你好'} -->
            <template v-slot:footer="{item,a}">
                <li>{{item}}</li>
                <span>{{a}}</span>
            </template>
        </Child>
    </div>
</template>
<script>
import Child from './child'
export default {
    data() {
        return {
            data: [1,2,3]
        }
    },
    components: {
        Child
    }
}
</script>