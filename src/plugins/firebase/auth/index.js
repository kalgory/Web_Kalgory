import Firebase from 'firebase/app';

// eslint-disable-next-line no-shadow
export function onAuthStateChanged(onAuthStateChanged) {
  Firebase.auth().onAuthStateChanged((user) => {
    console.log('auth state changed');
    onAuthStateChanged(user);
  });
}

export function createUserWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function signInWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function signOut() {
  return new Promise((resolve, reject) => {
    Firebase.auth().signOut()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function signInWithGoogle() {
  const GoogleAuthProvider = new Firebase.auth.GoogleAuthProvider();
  // GoogleAuthProvider.addScope('')
  return new Promise((resolve, reject) => {
    Firebase.auth().signInWithPopup(GoogleAuthProvider)
      .then((userCredential) => {
        resolve(userCredential);
      })
      .catch((error) => {
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
        reject(error);
      });
  });
}
