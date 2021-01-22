import Firebase from 'firebase/app'

export default {
  // namespace: true,
  state: {
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
  
  actions: {
    actOnAuthChanged ({ commit }) {
      Firebase.auth().onAuthStateChanged((user) => {
        console.log('act on auth changed')
        if (user) {
          commit('setIsAuth', user)
          commit('setUser', user)
          console.log('in')
        } else {
          commit('setIsAuth', user)
          commit('setUser', user)
          console.log('out')
        }
      })
    },
    // eslint-disable-next-line no-unused-vars
    actSignUp ({ commit }, payload) {
      Firebase.auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          console.log(user)
          console.log('act sign up')
        })
        .catch(error => {
          console.error(error)
        })
    },
    // eslint-disable-next-line no-unused-vars
    actSignIn ({ commit }, payload) {
      Firebase.auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          console.log(user)
          console.log('act sign in')
        })
        .catch((error) => {
          console.error(error)
        })
    },
    actSignOut () {
      Firebase.auth()
        .signOut()
        .then(() => {
          console.log('act sign in')
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}