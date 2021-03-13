export default {
  state: {
    isAuthLoading: true,
    isAuthenticated: false,
    isVerified: false,
    userUID: '',
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
    getUserUID(state) {
      return state.userUID;
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
    setUserUID(state, value) {
      state.userUID = value;
    },
  },
};
