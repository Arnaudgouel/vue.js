<template>
  
  <Header :cart="cart" :totalPrice="totalPrice" :discount="discount"/>
  
  <div>
    <!-- Router-View permet de charger les composants correspondants de chaque route -->
    <router-view @myEvent="addToCart($event)"/>
  </div>

  <Footer/>

  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      products:[
                {
                    id: 1,
                    name: "Gratuit",
                    price : "0",
                    image:"/assets/Christmas-tree-happy.png",
                    feature1: "10 utilisateurs inclus",
                    feature2: "2 GB de stockage",
                    feature3: "Support par Email",
                    feature4: "Accès au centre d'aide",
                    
                },
                {
                    id: 2,
                    name: "Pro",
                    price : "15",
                    image:"/assets/Mistletoe.png",
                    feature1: "20 utilisateurs inclus",
                    feature2: "10 GB de stockage",
                    feature3: "Support par Email prioritaire",
                    feature4: "Accès au centre d'aide",
                    
                },
                {
                    id: 3,
                    name: "Entreprise",
                    price : "30",
                    image:"/assets/Snowman.png",
                    feature1: "30 utilisateurs inclus",
                    feature2: "15 GB de stockage",
                    feature3: "Support par Email et Téléphone",
                    feature4: "Accès au centre d'aide",
                    
                }
            ],
      cart:[],
      totalPrice: 0,
      property: "",
      discount:5,
      discountTotal:0,

      // displayNav:true
    }
  },
  methods:{
    addToCart($event){

            this.cart.push($event);
            this.totalPrice += $event.price;
            console.log(this.totalPrice);
        },
    
    // display(){
    //   this.displayNav = !this.displayNav;
    //   console.log(this.displayNav);
    // }
  },
  computed:{
    }
}
</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css");
  @import url("https://www.w3schools.com/w3css/4/w3.css");
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  body,h1,h2,h3,h4,h5,h6{
    font-family: 'Lato', sans-serif;
    }
  </style>
