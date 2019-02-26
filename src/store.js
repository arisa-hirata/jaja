import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart (state, p) {
      state.cart.push(p)
    }
  }
})