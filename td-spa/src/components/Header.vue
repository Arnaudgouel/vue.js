<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button @click="display()" class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div v-show="displayNav" class="navbar-collapse collapse" id="navbarColor01" style="">
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
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            displayNav:true,
        }
    },
    methods:{
        display(){
            this.displayNav = !this.displayNav;
            console.log(this.displayNav);
        }
    }
}
</script>

<style scoped>
     
</style>