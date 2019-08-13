<template>
    <div>
       <Level :title="1">标题1</Level>
       <Level :title="2">标题2</Level>
       <Level :title="3">标题3</Level>
       <Level :title="4">标题4</Level>
       <Level :title="5">标题5</Level> 




       <!-- 通过render方法来订制组件,在父组件中传入render方法 -->
       <List1 :list1="list1" :render="render"/>
    </div>
</template>
<script>
import Level from './sonFuc'
import List1 from './list1'
export default {
    components: {
        Level,//测试最基本的函数式组件
        List1
    },
    data() {
        return {
            list1: ['香蕉', '苹果', '橘子']
        }
    },
    methods: {
        render(h,data) {
            return (
                <span>{data}</span>
            )
        }
    }
}
</script>