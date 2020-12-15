app.component("mycomponent",{
    template:'<p><button @click="addCount()">CLICK ME PLEASE {{ count }}</button></p>',
    data(){
        return{
            count:0
        }
    },
    methods:{
        addCount(){
            this.count++;
        }
    },
    computed:{

    }
})