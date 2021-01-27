import Firebase from "firebase/app";

export function getQuestionReference() {
    return Firebase.firestore()
        .collection('COMMUNITY')
        .doc('6zh2VISAhIJnRTBTm2iY')
        .collection('QUESTION')
}

export function getInformationReference() {
    return Firebase.firestore()
        .collection('COMMUNITY')
        .doc('3Cgg1Dgk1skk1FcD1JHq')
        .collection('INFORMATION')
}