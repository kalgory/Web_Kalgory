export default {
  state: {
    isAuthLoading: true,
    isAuth: false,
    user: null,
  },

  getters: {
    getIsAuthLoading(state) {
      return state.isAuthLoading;
    },
    getIsAuth(state) {
      return state.isAuth;
    },
    getUser(state) {
      return state.user;
    },
  },

  mutations: {
    setIsAuthLoading(state, value) {
      state.isAuthLoading = value;
    },
    setIsAuth(state, value) {
      state.isAuth = value;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
};
