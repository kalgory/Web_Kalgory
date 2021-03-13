import Firebase from 'firebase/app';

export function readProblems() {
  const reference = Firebase.firestore().collection('PROBLEM');
  // TODO add pagination
  return new Promise((resolve, reject) => {
    reference.get()
      .then((querySnapshot) => {
        resolve(querySnapshot);
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
