const app = new Vue ({
    el : "#app",
    data: function(){
        return{
            title:"Welcome To My Shop",
            products:[
                {
                    name: "Moustache mask",
                    price: 18,
                    image: "./assets/JS.png",
                    image2: "./assets/algo.png",
                    hovered:null,
                    stock: 15,
                    tags:{
                        type:"Funny",
                        for:"Men"
                    }
                },
                {
                    name: "Christmas sweater",
                    price: 35,
                    image: "./assets/JS.png",
                    image2: "./assets/algo.png",
                    hovered:null,
                    stock: 1,
                    tags:{
                        size:"S,M,L,XL",
                        material:"Wool"
                    }
                },
                {
                    name: "Tetris Lamp",
                    price: 27,
                    image: "./assets/JS.png",
                    image2: "./assets/algo.png",
                    hovered:null,
                    stock: 7,
                    tags:{
                        mood:"Retro",
                        for:"Geeks"
                    }
                }
            ],
            cart:[],
            totalPrice: 0,
            property: "",
            discount:5,
            displayCart: false
        }
    },
    methods:{
        addToCart(product){
            this.cart.push(product);
            this.totalPrice += product.price;
            this.setDisplayCart();
            console.log(this.totalPrice);
        },
        setDisplayCart(){
            this.displayCart = !this.displayCart;
        }
    },
    computed:{
        getDiscountTotal(){
            
            discountTotal = this.totalPrice-this.discount;
            if (discountTotal < 0){
                return 0;
            }
            else{

                return discountTotal;
            }
        }
    }

});