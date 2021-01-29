import Firebase from 'firebase/app';

// eslint-disable-next-line no-shadow
export function onAuthStateChanged(onAuthStateChanged) {
  Firebase.auth().onAuthStateChanged((user) => {
    console.log('auth state changed');
    onAuthStateChanged(user);
  });
}

export function createUserWithEmailAndPassword(name, email, password) {
  return new Promise((resolve, reject) => {
    Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('create user with email and password');
        resolve(userCredential);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

export function signInWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('sign in with email and password');
        resolve(userCredential);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

export function signOut() {
  return new Promise((resolve, reject) => {
    Firebase.auth().signOut()
      .then(() => {
        console.log('sign out with email and password');
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject();
      });
  });
}

export function signInWithGoogle() {
  const GoogleAuthProvider = new Firebase.auth.GoogleAuthProvider();
  // GoogleAuthProvider.addScope('')
  return new Promise((resolve, reject) => {
    Firebase.auth().signInWithPopup(GoogleAuthProvider)
      .then((userCredential) => {
        console.log(userCredential);
        resolve(userCredential);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

export function signInWithFaceBook() {

}

export function updateProfile(profile) {
  return new Promise((resolve, reject) => {
    Firebase.auth().currentUser.updateProfile(profile)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}
