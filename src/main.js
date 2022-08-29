import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import VeeValidate from "vee-validate";

import App from "./App.vue";
import msg from "./pt_BR";
import { routes } from "./routes";

import "./directives/transform";

import "bootstrap/dist/css/bootstrap.css";

import "jquery/dist/jquery.js";
// import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.js";

Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000/";
Vue.use(VueRouter);
Vue.use(VeeValidate, {
  locale: "pt_BR",
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
