import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cart: [],
    user: null,
    badLogin: false
  },
  mutations: {
    addToCart(state, p) {
      state.cart.push(p)
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            alert(error)
          }
        )
    },
    signUserIn({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
            this.state.badLogin = true
            console.log(this.state.badLogin)
          }
        )
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
})
