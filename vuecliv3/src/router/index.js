import {createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Shop from "../views/Shop.vue";
import NotFound from "../views/NotFound.vue";
import ProductDetails from "../views/ProductDetails.vue";

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
            component: Shop
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
            alias: "/contact-us"
        },
        {
            path: "/product/:id/:style?",
            name: "ProductDetails",
            component: ProductDetails,
        },
        {
            path: "/us-contact",
            redirect:"/contact"
            // redirect:{name :"Contact"}
        },
        {
            path: "/:catchAll(.*)",
            name: "404",
            component: NotFound
        },
    ]
});

export default router;