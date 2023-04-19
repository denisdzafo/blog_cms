import { defineStore } from 'pinia'

export let useAuthentication = defineStore('auth', {
  state: () => {
    return {
        token: null,
    }
  },

  getters: {
    isLoggedIn(state) {
      return state.token;
    },
  },

  actions: {
    setToken(token){
        console.log("etes", token)
        this.token = token;
    }
  }
})