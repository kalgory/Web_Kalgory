import Firebase from 'firebase/app'
import Store from '@/store'

Firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    Store.dispatch('')
  } else {
  
  }
})