<template>
  <nav>
    <ul>
      <li><router-link :to="{name: 'Home'}">Home</router-link></li>
      <li><router-link :to="{name: 'Shop'}">Shop</router-link></li>
      <li><router-link :to="{name: 'Contact'}">Contact</router-link></li>
      <li><router-link :to="{name: 'ProductDetails', params: {id:123}}">Product Details</router-link></li>
    </ul>
  </nav>
  <Header>
    <p>This is a slot zone</p>
    <template v-slot:welcome>
      This is a welcome message
    </template>
  </Header>
  <div>
    <!-- Router-View permet de charger les composants correspondants de chaque route -->
    <router-view/>
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
    Footer
  },
  data(){
    return{

    }
  }
}
</script>

<style>
  @import url("https://www.w3schools.com/w3css/4/w3.css");
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  body,h1,h2,h3,h4,h5,h6{
    font-family: 'Lato', sans-serif;
    }
  </style>
