<template>
    <main>
        
        <div class="tiger">
            <div class="row text-center mt-50">
                <div class="col-md-12 product">
                    <div class="card mb-4 shadow-sm product">
                        <div class="card-header product">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140" :src="products[$route.params.id-1].image"/>
                            <h4 class="my-0 fw-normal">{{ products[$route.params.id-1].name }}</h4>
                        </div>
                        <div class="card-body product">
                            <h1 class="card-title pricing-card-title">{{ products[$route.params.id-1].price }}€ <small class="text-muted">/ mois</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>{{ products[$route.params.id-1].feature1 }}</li>
                            <li>{{ products[$route.params.id-1].feature2 }}</li>
                            <li>{{ products[$route.params.id-1].feature3 }}</li>
                            <li>{{ products[$route.params.id-1].feature4 }}</li>
                            </ul>
                        </div>
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
    data(){
        return{
            // id: $route.params.id-1,
           
        }
    },
    methods:{
        
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
    #opacity, .product{
        background: rgba(255, 255, 255, 50%);

    }

</style>