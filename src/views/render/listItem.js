export default {
    mounted() {
        console.log(this.render)
    },
    methods: {
        get1() {
            return <button onClick={() => this.test()}>提交</button>
        },
        test() {
            alert(3)
        }
    },
    props: {
        render: {
            type: Function,
        },
        item: {
            type: String,
        
        }
    },
    render(h) {
        return this.render(h,this.item)
        //return this.get1()
    }
}