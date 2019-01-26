import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


const config = {
  apiKey: "AIzaSyD8WSvyqRBJdb-5KYKyVWNM7L2lYKTQ-dE",
  authDomain: "jaja-97cfc.firebaseapp.com",
  databaseURL: "https://jaja-97cfc.firebaseio.com",
  projectId: "jaja-97cfc",
  storageBucket: "jaja-97cfc.appspot.com",
  messagingSenderId: "757251250338"
}
firebase.initializeApp(config);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
