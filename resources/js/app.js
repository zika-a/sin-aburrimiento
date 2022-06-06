/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project

import Vue from "vue";

window.Vue = require("vue").default;

import VueRouter from "vue-router";
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component(
    "menu-component",
    require("./components/MenuComponent.vue").default
);
Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
import Carrito from "./components/CarritoComponent.vue";
import Streamings from "./components/StreamingsComponent.vue";

const routes = [
    {
        path: "/carrito",
        component: Carrito,
    },
    {
        path: "/",
        component: Streamings,
    },
];

const router = new VueRouter({ routes });

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router: router,
});
