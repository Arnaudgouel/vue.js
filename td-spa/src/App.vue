<template>
  
  <Header/>
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
      // displayNav:true
    }
  },
  methods:{
    // display(){
    //   this.displayNav = !this.displayNav;
    //   console.log(this.displayNav);
    // }
  }
}
</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css");
  /* @import url("https://www.w3schools.com/w3css/4/w3.css"); */
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  body,h1,h2,h3,h4,h5,h6{
    font-family: 'Lato', sans-serif;
    }
  </style>
