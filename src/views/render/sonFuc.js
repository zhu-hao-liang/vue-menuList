//函数式组件没有模板,只允许提供render函数(其实就是 <template/>模板，与.vue结尾生成的组件一样)
//vue 支持jsx语法
export default {
    props: {
        title: {
            type: Number,
            default: 1,
        }
    },
    render(h) {// createElement
        const arr = [1,2,3]
        console.log(h);
        // const tag = 'h'+ this.title
        // return (
        //     <tag>
        //         {/* <slot></slot>使用插槽的话 就不能这么用 */}
        //       {this.$slots.default}
        //     </tag>
        // )
        return (
            <ul>
                {arr.map((item) => <li>{item}</li>)}
            </ul>
        )
    }
}