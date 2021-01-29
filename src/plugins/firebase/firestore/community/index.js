import Firebase from 'firebase/app';

export function createPost(reference, newPost) {
  return new Promise((resolve, reject) => {
    reference.add({
      header: newPost.header,
      body: newPost.body,
      created_at: Firebase.firestore.Timestamp.now(),
    })
      .then((docRef) => {
        resolve(docRef);
      }).catch((error) => {
        reject(error);
      });
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
        const Post = {};
        Post.id = snapshot.id;
        Post.header = snapshot.data().header;
        Post.body = snapshot.data().body;
        Post.createdAt = snapshot.data().created_at;
        resolve(Post);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
