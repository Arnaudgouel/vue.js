<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ blague.value }}</h1>
    <img :src="blague.icon_url">
    <button @click="getJokes()">Get New Joke</button>

    <h2>Users from jsonplaceholder</h2>
    <div v-for="user in users" :key="user" >
      <ul>
        <li>{{user.name}}</li>
      </ul>
      </div>

      <!-- Gestion http POST pour envoyer des données vers le serveur -->
      <h1>HTTP POST</h1>
      <p>
      <label>Nom : </label>
      <input type="text" v-model="nom_utilisateur">
      </p>
      <p>
      <label>Prenom : </label>
      <input type="text" v-model="prenom_utilisateur">
      </p>
      <p>
      <label>Adresse : </label>
      <input type="text" v-model="adresse_utilisateur">
      </p>
      <p>
      <label>Code Postal : </label>
      <input type="text" v-model="CP_utilisateur">
      </p>
      <button @click="submit()">Envoyer</button>
  </div>
</template>

<script>
// on importe l'utilitaire http axios
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      blague: '',
      users: [],
      nom_utilisateur : '',
      prenom_utilisateur : '',
      adresse_utilisateur : "",
      CP_utilisateur : ""
    }
  },
  methods:{
    getJokes(){
      axios.get('https://api.chucknorris.io/jokes/random').then(response =>{
      // console.log(response.data);
      this.blague = response.data
    })
    },
    submit(){
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      // on envoie les données au serveur avec la méthode POST d'axios
      axios.post('http://localhost/form/post.php', 'nom=' + this.nom_utilisateur + '&prenom=' + this.prenom_utilisateur + '&adresse=' + this.adresse_utilisateur +'&code_postal=' + this.CP_utilisateur)
      .then(response =>{
        // success
        console.log(response)
      })
      .catch(error =>{
        // failure
        console.log( error )
      })
      console.log(this.nom_utilisateur);
    }
  },
  mounted(){
    this.getJokes()
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
      // console.log(response.data)
      this.users = response.data;
    })
    .catch(error => {
      console.error(error)
    })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
