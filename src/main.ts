import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuelidate from 'vuelidate';
import './styles/vendor/normalize.css';
import './styles/main.css';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
