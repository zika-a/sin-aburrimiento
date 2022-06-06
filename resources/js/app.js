import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
import VueRouter from "vue-router";

window.Vue = require("vue").default;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//Vistas para las rutas
import Carrito from "./components/CarritoComponent.vue";
import Streamings from "./components/StreamingsComponent.vue";

//Principal
import App from "./components/App.vue";
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
    components: {
        App,
    },
});
