const RootComponent = {
    data(){
        return{
            title:"Carousel",
            property: "Are you there ?",
            slides:[
                "algo.png",
                "JS.png",
                "cup pong.png",
                "sushi.jpg"
            ],
            index:0
        }
    },
    methods:{
        slideNext(){
            if(this.index >= this.slides.length-1){
                this.index = 0;
            }
            else{

                this.index++;
            }
            console.log(this.index)
        }
    },
    mounted(){
        setInterval(()=>{this.slideNext()}, 4000)
    }
    
}
const app = Vue.createApp(RootComponent);