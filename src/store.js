import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cart: [],
    editing: [],
    user: null,
    badLogin: false,
    badCreate: false
  },
  mutations: {
    addToCart(state, p) {
      state.cart.push(p)
    },
    toEdit(state, phonecase) {
      state.editing.pop();
      state.editing.push(phonecase)
    },
    setUser(state, payload) {
      state.user = payload
    },
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
