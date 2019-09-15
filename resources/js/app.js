//////////////////
// Load complements, was bootstrap
require("./app_core");

//////////////////
// Load vue and complements
import Vue from "vue";
import router from "./core/routes";
import store from "./core/store";
import App from "./layout/MainApp";

//////////////////
// Vue configuration
Vue.config.productionTip = false;

const app = new Vue({
    el: "#web-app",
    router,
    store,
    components: {
        App
    }
});
