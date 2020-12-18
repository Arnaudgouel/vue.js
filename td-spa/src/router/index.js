import {createRouter, createWebHistory} from 'vue-router';
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Shop from "../views/Shop.vue";
import Product from "../views/Product.vue";

const router = createRouter({
    history : createWebHistory(),
    routes:[
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/shop",
            name: "Shop",
            component: Shop,
            props : true
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact
        },
        {
            path: "/product/:id",
            name: "Product",
            component: Product
        },
    ]
});

export default router;