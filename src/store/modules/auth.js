export default {
  state: {
    isLoading: true,
    isAuth: null,
    user: null,
  },
  
  getters: {
    getIsAuth (state) {
      return state.isAuth
    },
    getUser (state) {
      return state.user
    },
  },
  
  mutations: {
    setIsAuth (state, value) {
      state.isAuth = value
    },
    setUser (state, payload) {
      state.user = payload
    },
  },
}