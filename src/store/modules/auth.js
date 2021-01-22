import Firebase from 'firebase/app'

export default {
  // namespace: true,
  state: {
    isAuth: false,
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
    setUserSignIn (state, payload) {
      state.user = payload
      state.isAuth = true
    },
    setUserSignOut (state) {
      state.user = null
      state.isAuth = false
    },
  },
  
  actions: {
    actOnAuthChanged (context) {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('store: sign in')
          context.commit('setUserSignIn', user)
        } else {
          console.log('store: sign out')
          context.commit('setUserSignOut')
        }
      })
    },
    actSignUp (payload) {
      Firebase.auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .catch(error => {
          console.error(error)
        })
    },
    actSignIn (payload) {
      Firebase.auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .catch(error => {
          console.error(error)
        })
    },
    actSignOut () {
      Firebase.auth()
        .signOut()
        .catch(error => {
          console.error(error)
        })
    },
  },
}