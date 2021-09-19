export const myMixin={
    data(){
                                                                        return{
            name:"我是mixin，我要复用",
            msg:"我是你爸爸",
        }
    },
    created() {
        console.log("我是minxin的生命开始周期");
    },
    mounted(){
        console.log("我是mixin的mounted的生命周期");
    }

}