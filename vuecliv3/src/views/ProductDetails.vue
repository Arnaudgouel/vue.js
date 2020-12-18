<template>
<div>

    <h1>ProductDetails</h1>
    <h2>{{ $route.params }}</h2>
    <!-- récupérer les parametres du chemin avec $route.params -->
</div>
</template>

<script>
export default {
    name:'ProductDetails',
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{

    }
}
</script>

<style scoped>
    h1{
        color: red;
    }
</style>