import { createApp } from 'vue'
import App from './App.vue'
// import Products from './components/Products.vue'
// import Contact from './components/Contact.vue'
// import Shop from './components/Shop.vue'
import router from './router/index'

const app = createApp(App);
// app.component("Products", Products)
// app.component("Contact", Contact)
// app.component("Shop", Shop)
app.use(router)
app.mount('#app');
