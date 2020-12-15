const RootComponent = {
    data(){
        return{
            title:"Hello World",
            property: "Are you there ?"
        }
    },
    methods:{
        wakeUp(str){
            alert(str);
        }
    },
    created(){
        console.log("CREATED !!!")
    },
    mounted(){
        console.log("MOUNTED !!!")
    },
}
const app = Vue.createApp(RootComponent);
