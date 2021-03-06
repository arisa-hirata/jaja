import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store'
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

Vue.use(BootstrapVue)

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyD8WSvyqRBJdb-5KYKyVWNM7L2lYKTQ-dE',
  authDomain: 'jaja-97cfc.firebaseapp.com',
  databaseURL: 'https://jaja-97cfc.firebaseio.com',
  projectId: 'jaja-97cfc',
  storageBucket: 'jaja-97cfc.appspot.com',
  messagingSenderId: '757251250338'
}
firebase.initializeApp(config)

new Vue({
  store:store,
  router,
  render: h => h(App)
}).$mount('#app')
