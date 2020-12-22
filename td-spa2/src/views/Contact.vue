<template>
    <div class="container">
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
        <h2>Checkout form</h2>
        <p class="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>

      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Votre Panier ({{cart.length}})</span>
            <button class="btn btn-danger" @click="supprimerPanier()">Supprimer le panier</button>
          </h4>
          <ul class="list-group mb-3">
            <li v-for="product in cart" :key="product" class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">{{product.name}}</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">{{product.price}} €</span>
            </li>
            <li v-if="promo === 'QUENTIN2020'" class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Code Promo</h6>
                <small>{{promo}}</small>
              </div>
              <span class="text-success">-{{discount}} €</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (Euros)</span>
              <strong v-if="promo === 'QUENTIN2020'">{{totalPrice - getDiscountTotal()}} €</strong>
              <strong v-else>{{totalPrice}} €</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" v-model="promo" placeholder="Code Promo (c'est 'QUENTIN2020')">
            </div>
          </form>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Adresse de facturation</h4>
          <form class="needs-validation" @submit="verif()">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Prénom</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Nom</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="username">Pseudo</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" id="username" placeholder="Username" required>
                <div class="invalid-feedback" style="width: 100%;">
                  Un pseudo valide est nécessaire.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Adresse</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
              <div class="invalid-feedback">
                  Une adresse valide est nécessaire.
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="zip">Code Postal</label>
                <input type="text" class="form-control" id="zip" placeholder="" required>
                <div class="invalid-feedback">
                  Un code postal valide est nécessaire.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="ville">Ville</label>
                <input type="text" class="form-control" id="ville" placeholder="" required>
                <div class="invalid-feedback">
                  Une ville valide est nécessaire.
                </div>
              </div>
            </div>
            
            <hr class="mb-4">
            <button class="btn btn-primary btn-lg btn-block" type="submit">Valider</button>
          </form>
        </div>
      </div>
      <h3 class="text-center mb-5 mt-5">Voici les 3 vidéos youtube les plus vues sur le thème de o2switch</h3>
      <div class="row">
          <div v-for="api in apiYoutube" :key="api" class="col-md-4">
            <img class="rounded mx-auto d-block" :src="api.snippet.thumbnails.medium.url" alt="" srcset="">
            <h4 class="text-center align-text-bottom">
              <a target="_blank" :href="'https://www.youtube.com/watch?v=' + api.id.videoId">
              {{api.snippet.title}}
              </a>
            </h4>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Contact",
    props:[
      'cart',
      'totalPrice',
      'discount',
      'getDiscountTotal'
    ],
    data(){
        return{
          promoValide : false,
          promo : '',
          apiYoutube : '',

        }
    },
    methods:{
      supprimerPanier(){
        this.$emit("deleteCart");
      },

    },
    mounted(){
      axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=viewCount&q=o2switch&type=video&key=AIzaSyDCHtEfdOPDbp8EFTwWfawO6IjkZitTd_4')
      .then( api =>{
        console.log(api.data.items)
        this.apiYoutube = api.data.items;
      })
    }
}
</script>

<style scoped>

</style>