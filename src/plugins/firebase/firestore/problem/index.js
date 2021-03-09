import Firebase from 'firebase/app';

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

export function createProblem(problem) {
  const reference = Firebase.firestore().collection('PROBLEM');
  return new Promise((resolve, reject) => {
    reference.add(problem)
      .then((documentReference) => {
        resolve(documentReference);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
