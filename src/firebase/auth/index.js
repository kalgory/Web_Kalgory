import Firebase from 'firebase/app'

export function onAuthStateChanged (onAuthStateChanged) {
  Firebase.auth().onAuthStateChanged((user) => {
    console.log('auth state changed')
    onAuthStateChanged(user)
  })
}

export function createUserWithEmailAndPassword (email, password) {
  return new Promise(function (resolve, reject) {
    Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('create user with email and password')
        resolve(user)
      })
      .catch((error) => {
        console.error(error)
        reject(error)
      })
  })
}

export function signInWithEmailAndPassword (email, password) {
  return new Promise(function (resolve, reject) {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('sign in with email and password')
        resolve(user)
      })
      .catch((error) => {
        console.error(error)
        reject(error)
      })
  })
}

export function signOut () {
  return new Promise(function (resolve, reject) {
    Firebase.auth().signOut()
      .then(() => {
        console.log('sign out with email and password')
        resolve()
      })
      .catch((error) => {
        console.error(error)
        reject()
      })
  })
}