import Firebase from 'firebase/app';

export function readUser(userUID) {
  console.log(userUID, 'firebase read User');
  return new Promise((resolve, reject) => {
    Firebase.firestore().collection('USER').where('uid', '==', userUID).get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          reject(new Error('user not exists'));
        }
        querySnapshot.forEach((queryDocumentSnapshot) => {
          resolve(queryDocumentSnapshot.data());
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function updateUserProfile() {
  // TODO
}
