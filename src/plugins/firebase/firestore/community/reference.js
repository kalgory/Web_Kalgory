import Firebase from 'firebase/app';

export function getQuestionCommunityReference() {
  return Firebase.firestore()
    .collection('COMMUNITY')
    .doc('6zh2VISAhIJnRTBTm2iY')
    .collection('QUESTION');
}

export function getInformationCommunityReference() {
  return Firebase.firestore()
    .collection('COMMUNITY')
    .doc('3Cgg1Dgk1skk1FcD1JHq')
    .collection('INFORMATION');
}
