// import Firebase from 'firebase/app';
import { getQuestionReference, getInformationReference } from './reference';

function changeDateFormat(timestamp) {
  const date = timestamp.toDate();
  // const now = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  // if (now.getDate() === day) {
  //   return `${hour}시 ${minute}분`;
  // } if (now.getMonth() === month) {
  //   return `${day}일 ${hour}시 ${minute}분`;
  // } if (now.getFullYear() === year) {
  //   return `${month}월 ${day}일 ${hour}시 ${minute}분`;
  // }
  return `${year}년${month}월 ${day}일 ${hour}시 ${minute}분`;
}

export default function readNewPost(threadType, threadList) {
  let ref;
  if (threadType === 'questions')ref = getQuestionReference();
  else if (threadType === 'information')ref = getInformationReference();
  ref.orderBy('created_time', 'desc').limit(5).get().then((sn) => {
    sn.forEach((doc) => {
      const newThread = doc.data();
      newThread.id = doc.id;
      newThread.created_time = changeDateFormat(doc.data().created_time);
      threadList.push(newThread);
    });
  })
    .catch((err) => {
      console.error(err);
    });
}
