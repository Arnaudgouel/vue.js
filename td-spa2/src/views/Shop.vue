<template>
    <main>
        
        <div class="tiger">
            <div id="opacity" class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Prix</h1>
                <p class="lead">Chez o2switch, nous fournissons le meilleur de l'hébergement ! Nous répondons aux besoins de vos sites web, avec des technologies innovantes et une assistance sans faille !</p>
            </div>
        </div>

        <div class="row text-center">
            <div v-for="product in products" :key="product" class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <div class="card-header">
                        <img class="bd-placeholder-img rounded-circle" width="140" height="140" :src="product.image"/>
                        <h4 class="my-0 fw-normal">{{product.name}}</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">{{product.price}} € <small class="text-muted">/ mois</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                        <li>{{product.feature1}}</li>
                        <li>{{product.feature2}}</li>
                        <li>{{product.feature3}}</li>
                        <li>{{product.feature4}}</li>
                        </ul>
                        <router-link class="white" :to="{ name: 'Product', params: { id: product.id }}"><button type="button" class="w-100 btn btn-lg btn-primary">+ D'infos</button></router-link>
                        <button type="button" class="w-100 btn btn-lg btn-primary mt-1" @click="addToCart(product)">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>


export default {
    name: "Shop",
    props:[
        'products'
    ],
    components: {},
    data(){
        return{
            
        }
    },
    methods:{
        addToCart(product){
            this.$emit('myEvent', product);
            
        }
    }
}
</script>

<style scoped>
    .tiger{
        height: 800px;
        width: 100%;
        background: url("https://www.o2switch.fr/images/o2switch-Mascotte-Tigre-Pere-Noel-anim.svg") no-repeat;
        background-attachment: fixed;
        background-position: center center;
    }
    #opacity{
        background: rgba(255, 255, 255, 50%);
    }
    .white{
      color: white; 
      text-decoration: none; 
    }
</style>