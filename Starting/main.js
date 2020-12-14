const app = new Vue({
    el:"#app",
    data: function(){
        return{

            title:"Welcome to my Vue app!!!",
            introduction:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id vitae eveniet, numquam ea exercitationem consequuntur quis est doloremque consequatur vel aliquid nisi asperiores ducimus veritatis reiciendis qui. Hic, saepe non?",
            subTitle:"Joyeux Noël",
            computeTitle:"",
            christmas:false,
            summer:3,
            sale:true,
            property:"",
            product : [
                5,
                6,
                7,
                {
                    item1:"livre",
                    item2:"lampe"
                }
            ],
            count:0,
            image:"./assets/JS.png"
        }

    },
    methods:{
        alert(str){
            console.log(this.property);
        }
    },
    computed:{
        footerMessage(){
            this.computeTitle = this.title + ' ' + this.subTitle;
            return this.computeTitle;
        }
    }
});