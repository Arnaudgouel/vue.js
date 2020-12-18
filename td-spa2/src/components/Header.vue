<template>
<div>


    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <button @click="display()" class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <!-- <div class="navbar collapse" id="navbarColor01" style="">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/shop">Shop</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/contact">Panier</router-link>
            </li>
            </ul>
        </div> -->
        <div v-show="displayNav" class="navbar-collapse" id="navbarColor02" style="">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Home'}">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Shop'}">Shop</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Contact'}">Contact</router-link>
            </li>
            <li class="nav-item w3-right">
                <a href="#" class="w3-right w3-button w3-bar-item" @click="setDisplayCart()">({{cart.length}}) Panier</a>
            </li>
            <li class="nav-item w3-right">
                <a href="https://github.com/Arnaudgouel/vue.js" class="w3-right w3-button w3-bar-item" >Github</a>
            </li>
            </ul>
        </div>
    </nav>
              
    <transition name="slide">
                    <!-- panier -->
    <div class="w3-right w3-border w3-white position-absolute" v-show="displayCart">
        <table class="w3-table">
            <tr>
                <th>Product</th>
                <th>Price</th>
            </tr>
            <tr v-for="product in cart" :key="product">
                <td>{{product.name}}</td>
                <td>{{product.price}} €</td>
            </tr>
            <tr>
                <td>Discount Code</td>
                <td><input type="text" placeholder="CODE PROMO" v-model="property"></td>
            </tr>
            <tr>
                <th>Total</th>
                <th v-if="property === 'QUENTIN2020'">{{totalPrice}} (-{{discount}}€) {{getDiscountTotal}} €</th>
                <th v-else>{{totalPrice}} €</th>
            </tr>                      
        </table>
    </div>
    </transition>
            

</div>
</template>

<script>
export default {
    name:'Header',
    props:[
        'cart',
        'totalPrice',
        'discount',
    ],
    data(){
        return{
            displayNav:true,
            displayCart:false,
            discountTotal:0,
            
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
            property:"",
        }
    },
    methods:{
        display(){
            this.displayNav = !this.displayNav;
        },
        setDisplayCart(){
            this.displayCart = !this.displayCart;
        },
        getDiscountTotal(){
          
          this.discountTotal = this.totalPrice-this.discount;
          if (this.discountTotal < 0){
              return 0;
          }
          else{

              return this.discountTotal;
          }
      }
    }
}
</script>

<style scoped>
     .slide-enter-active{
            animation: slide 0.5s;
        }
        .slide-leave-active{
            animation: slide 0.5s reverse;
        }
        @keyframes slide {
            0%{
                transform: translateX(500px);
            }
            100%{
                transform: translateX(0px);
            }
        }
    .position-absolute{
        right: 0;
    }
</style>