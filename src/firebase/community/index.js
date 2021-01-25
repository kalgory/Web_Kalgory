import firebase from 'firebase/app'

function getDocument(filedType){
    if(filedType==="questions" || filedType==="popular questions")
        return firebase.firestore().collection('COMMUNITY').doc('GzLfP8nHbv1eD07EA8dj').collection('Question')
    else if(filedType==="information"||filedType==="popular information")
        return firebase.firestore().collection('COMMUNITY').doc('LXEdunvMoBpcz58FzlX0').collection('Information')
}

export function communityFiledRead(filedType){
    const doc=getDocument(filedType)
    doc.limit(5)
}