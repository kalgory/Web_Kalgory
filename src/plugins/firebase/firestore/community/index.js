import Firebase from 'firebase/app';

export function createPost(reference, post) {
  return new Promise((resolve, reject) => {
    reference.add({
      header: post.header,
      body: post.body,
      created_at: Firebase.firestore.Timestamp.now(),
    })
      .then((document) => {
        resolve(document);
      })
      .catch((error) => {
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
          const post = {};
          post.id = document.id;
          post.header = document.data().header;
          post.body = document.data().body;
          post.createdAt = document.data().created_at;
          post.onPanel = false;
          post.panelIcon = 'mdi-chevron-down';
          posts.push(post);
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
        const post = {};
        post.id = snapshot.id;
        post.header = snapshot.data().header;
        post.body = snapshot.data().body;
        post.createdAt = snapshot.data().created_at;
        resolve(post);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
