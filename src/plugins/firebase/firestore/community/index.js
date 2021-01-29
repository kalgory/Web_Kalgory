import Firebase from 'firebase/app';

export function createPost(reference, newPost) {
  reference.add({
    header: newPost.header,
    body: newPost.body,
    create_at: Firebase.firestore.Timestamp.now(),
  });
}

export function readPosts(reference, count = null) {
  return new Promise((resolve, reject) => {
    reference.orderBy('created_at', 'desc').limit(count).get()
      .then((snapshot) => {
        const posts = [];
        snapshot.forEach((document) => {
          const newPost = {};
          newPost.id = document.id;
          newPost.header = document.data().header;
          newPost.body = document.data().body;
          newPost.createdAt = document.data().created_at;
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
        const currentPost = {};
        currentPost.id = snapshot.id;
        currentPost.header = snapshot.data().header;
        currentPost.body = snapshot.data().body;
        currentPost.createdAt = snapshot.data().created_at;
        resolve(currentPost);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
