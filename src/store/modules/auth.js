export default {
  state: {
    isLoading: true,
    isAuth: false,
    user: null,
  },
  
  getters: {
    getIsLoading (state) {
      return state.isLoading
    },
    getIsAuth (state) {
      return state.isAuth
    },
    getUser (state) {
      return state.user
    },
  },
  
  mutations: {
    setIsLoading (state, value) {
      state.isLoading = value
    },
    setIsAuth (state, value) {
      state.isAuth = value
    },
    setUser (state, payload) {
      state.user = payload
    },
  },
}