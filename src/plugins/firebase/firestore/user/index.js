import Firebase from 'firebase/app';

export function getUserDocumentReference(UserID) {
  return new Promise((resolve, reject) => {
    Firebase.firestore().get.collection('USER').where('id', '==', UserID)
      .get((snapshot) => {
        snapshot.forEach((document) => {
          resolve(document.data());
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getUserSnapshot(userReference) {
  return new Promise((resolve, reject) => {
    userReference.get()
      .then((snapshot) => {
        resolve(snapshot);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
