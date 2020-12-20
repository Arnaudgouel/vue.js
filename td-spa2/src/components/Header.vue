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
                <a target="_blank" href="https://github.com/Arnaudgouel/vue.js" class="w3-right w3-button w3-bar-item" >Github</a>
            </li>
            </ul>
        </div>
    </nav>
              
    <transition name="slide">
                    <!-- panier -->
    <div class="w3-right w3-border w3-white position-absolute" v-show="displayCart">
        <table class="w3-table">
            <tr>
                <th>Produit</th>
                <th>Prix</th>
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
                <th v-if="property === 'QUENTIN2020'">{{totalPrice}} (-{{discount}}€) {{(totalPrice-discount)}} €</th>
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
        'products'
    ],
    data(){
        return{
            displayNav:true,
            displayCart:false,
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