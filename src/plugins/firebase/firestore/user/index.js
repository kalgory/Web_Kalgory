import Firebase from 'firebase/app';

export function readUserByUID(userUID) {
  return new Promise((resolve, reject) => {
    Firebase.firestore().collection('USER').where('uid', '==', userUID).get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          reject(new Error('user not exists'));
        }
        resolve(querySnapshot.docs[0].data());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getUserReference(userUID) {
  return new Promise((resolve, reject) => {
    Firebase.firestore().collection('USER').where('uid', '==', userUID).get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          reject(new Error('user not exists'));
        }
        resolve(querySnapshot.docs[0].ref);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function readUser(reference) {
  return new Promise((resolve, reject) => {
    reference.get()
      .then((documentSnapshot) => {
        resolve(documentSnapshot);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function updateUserProfile() {
  // TODO
}
