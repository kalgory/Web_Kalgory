import firebase from 'firebase/app';

function changeDateFormat(timestamp) {
  const date = timestamp.toDate();
  const now = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  if (now.getDate() === day) {
    return `${hour}시 ${minute}분`;
  } if (now.getMonth() === month) {
    return `${day}일 ${hour}시 ${minute}분`;
  } if (now.getFullYear() === year) {
    return `${month}월 ${day}일 ${hour}시 ${minute}분`;
  }
  return `${year}년${month}월 ${day}일 ${hour}시 ${minute}분`;
}

function getDocument(threadType) {
  if (threadType === 'questions' || threadType === 'popular questions') return firebase.firestore().collection('COMMUNITY').doc('6zh2VISAhIJnRTBTm2iY').collection('QUESTION');
  if (threadType === 'information' || threadType === 'popular information') return firebase.firestore().collection('COMMUNITY').doc('3Cgg1Dgk1skk1FcD1JHq').collection('INFORMATION');
}

export function communityNewThreadRead(threadType, threadList) {
  const doc = getDocument(threadType);
  doc.orderBy('created_time', 'desc').limit(5).get().then((sn) => {
    sn.forEach((doc) => {
      const newThread = doc.data();
      { newThread.id = doc.id, newThread.created_time = changeDateFormat(doc.data().created_time); }
      threadList.push(newThread);
    });
  })
    .catch((err) => {
      console.log(err);
    });
}
