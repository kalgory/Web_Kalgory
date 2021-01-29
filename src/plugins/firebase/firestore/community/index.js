import Firebase from 'firebase/app';

export function createPost(reference, newPost) {
  reference.add({
    header: newPost.header,
    body: newPost.body,
    created_time: Firebase.firestore.Timestamp.now(),
  }).then();
}

export function readPosts(reference, count = null) {
  return new Promise((resolve, reject) => {
    reference.orderBy('created_time', 'desc').limit(count).get()
      .then((snapshot) => {
        const posts = [];
        snapshot.forEach((document) => {
          const newPost = document.data();
          newPost.id = document.id;
          posts.push(newPost);
        });
        resolve(posts);
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
        resolve(snapshot.data());
      })
      .catch((error) => {
        reject(error);
      });
  });
}
