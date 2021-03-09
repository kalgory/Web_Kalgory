import Firebase from 'firebase/app';

// eslint-disable-next-line import/prefer-default-export
export function readProblems() {
  const reference = Firebase.firestore().collection('PROBLEM');
  return new Promise((resolve, reject) => {
    reference.get()
      .then((querySnapshot) => {
        resolve(querySnapshot);
        console.log(querySnapshot.size);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
