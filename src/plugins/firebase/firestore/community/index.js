import Firebase from 'firebase/app';

export function getQuestionCollectionReference() {
  return Firebase.firestore()
    .collection('COMMUNITY')
    .doc('6zh2VISAhIJnRTBTm2iY')
    .collection('QUESTION');
}

export function getInformationCollectionReference() {
  return Firebase.firestore()
    .collection('COMMUNITY')
    .doc('3Cgg1Dgk1skk1FcD1JHq')
    .collection('INFORMATION');
}

export function createPost(reference, post) {
  return new Promise((resolve, reject) => {
    reference.add(post)
      .then((documentReference) => {
        resolve(documentReference);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function readPosts(reference, count = Number, snapshot = {}) {
  return new Promise((resolve, reject) => {
    reference.orderBy('created_at', 'desc').startAfter(snapshot).limit(count).get()
      .then((querySnapshot) => {
        resolve(querySnapshot);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function readPost(reference, documentID) {
  return new Promise((resolve, reject) => {
    reference.doc(documentID).get()
      .then((snapshot) => {
        resolve(snapshot);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
