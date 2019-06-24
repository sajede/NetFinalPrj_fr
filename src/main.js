import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import VueRouter from 'vue-router';
import { routes } from './routes';

import { store } from './store/store';

Vue.use(VueResource);
Vue.http.options.root = 'main URL';

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
