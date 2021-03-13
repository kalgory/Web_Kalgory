export default {
  state: {
    isAuthLoading: true,
    isAuthenticated: false,
    isVerified: false,
    user: null,
    userReference: null,
  },

  getters: {
    getIsAuthLoading(state) {
      return state.isAuthLoading;
    },
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getIsVerified(state) {
      return state.isVerified;
    },
    getUser(state) {
      return state.user;
    },
    getUserReference(state) {
      return state.userReference;
    },
  },

  mutations: {
    setIsAuthLoading(state, value) {
      state.isAuthLoading = value;
    },
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
    setIsVerified(state, value) {
      state.isVerified = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setUserReference(state, value) {
      state.userReference = value;
    },
  },
};
