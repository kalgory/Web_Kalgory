import Firebase from 'firebase/app'

export function onAuthStateChanged (onUserExist, onUserNotExist) {
  Firebase.auth().onAuthStateChanged((user) => {
    console.log('auth state changed')
    if (user) {
      onUserExist(user)
    } else {
      onUserNotExist()
    }
  })
}

export function createUserWithEmailAndPassword (email, password) {
  Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('create user with email and password')
      console.log(user)
    })
    .catch(error => {
      console.error(error)
    })
}

export function signInWithEmailAndPassword (email, password) {
  Firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('sign in with email and password')
      console.log(user)
    })
    .catch((error) => {
      console.error(error)
    })
}

export function signOut () {
  Firebase.auth().signOut()
    .then(() => {
      console.log('sign out with email and password')
    })
    .catch((error) => {
      console.error(error)
    })
}