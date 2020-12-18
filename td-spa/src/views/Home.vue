<template>
    <div class="container marketing mt-5">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="assets/rocket.png"/>

        <h2>Offre</h2>
        <p>Cette offre est tout compris, illimitée et aux ressources monstrueuses. Elle met à votre disposition le maximum de fonctions qu'o2switch peut vous offrir.</p>
        <p><a class="btn btn-secondary" href="#" role="button">Voir détails &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="assets/earth.png"/>

        <h2>Performance</h2>
        <p>La performance est notre ADN. Nos hébergements utilisent la technologie NVMe, les caches Varnish ou LSCache. Profitez d'un site jusqu'à 20x plus rapide !</p>
        <p><a class="btn btn-secondary" href="#" role="button">Voir détails &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="assets/earth.png"/>

        <h2>Connectivité</h2>
        <p>Vos besoins sont critiques ? Nos serveurs d'hébergement utilisent un réseau prémium, redondé, et sécurisé par Anti-DDoS Arbor. Nous servons vos pages au plus proche de vos visiteurs !</p>
        <p><a class="btn btn-secondary" href="#" role="button">Voir détails &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" :src="slides1[index]">

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" :src="slides1[index]">

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" :src="slides1[index]">

      </div>
    </div>
    </div>

</template>

<script>


export default {
    name:'Home',
    data(){
        return{
            slides1:[
                "assets/Christmas-tree-happy.png",
                "assets/Mistletoe.png",
                "assets/Snowman.png",
            ],
            index:0
        }
    },
    methods:{
        slideNext(){
            if(this.index >= this.slides1.length-1){
                this.index = 0;
            }
            else{

                this.index++;
            }
            // console.log("Slide next : " + this.slides1[this.index])
        }
    },
    computed:{

    },
    mounted(){
        setInterval(()=>{this.slideNext()}, 4000)
    }
}
</script>

<style scoped>
    
</style>