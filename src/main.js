import Vue from 'vue';
import App from './App.vue';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
