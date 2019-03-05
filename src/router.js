import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Allcase from './views/Allcase.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Products from './views/Products.vue'
import Cart from './views/Cart.vue'
import Edit from './views/Edit.vue'
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
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/allcase',
      name: 'allcase',
      component: Allcase
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
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})