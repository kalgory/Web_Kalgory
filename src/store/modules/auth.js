export default {
  state: {
    isAuthLoading: true,
    isAuthenticated: false,
    user: null,
  },

  getters: {
    getIsAuthLoading(state) {
      return state.isAuthLoading;
    },
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUser(state) {
      return state.user;
    },
  },

  mutations: {
    setIsAuthLoading(state, value) {
      state.isAuthLoading = value;
    },
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
};
