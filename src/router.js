import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
=======
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Products from './views/Products.vue'
>>>>>>> 26abd34bf4358b62dd595eb0515ec81d6a2ac84e

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
<<<<<<< HEAD
      path:'/signup',
      name:'signup',
      component: SignUp
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
=======
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
>>>>>>> 26abd34bf4358b62dd595eb0515ec81d6a2ac84e
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
