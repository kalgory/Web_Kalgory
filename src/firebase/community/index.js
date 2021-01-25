import firebase from 'firebase/app'
function changeDateFormat(timestamp) {
    const date = timestamp.toDate()
    const now = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    if (now.getDate() === day) {
        return hour + '시 ' + minute + '분'
    } else if (now.getMonth() === month) {
        return day + '일 ' + hour + '시 ' + minute + '분'
    } else if (now.getFullYear() === year) {
        return month + '월 ' + day + '일 ' + hour + '시 ' + minute + '분'
    } else {
        return year + '년' + month + '월 ' + day + '일 ' + hour + '시 ' + minute + '분'
    }
}
function getDocument(threadType){
    if(threadType==="questions" || threadType==="popular questions")
        return firebase.firestore().collection('COMMUNITY').doc('6zh2VISAhIJnRTBTm2iY').collection('Question')
    else if(threadType==="information"||threadType==="popular information")
        return firebase.firestore().collection('COMMUNITY').doc('3Cgg1Dgk1skk1FcD1JHq').collection('Information')
}

export function communityNewThreadRead(threadType){
    const doc=getDocument(threadType)
    doc.limit(5).get().then(sn=>{
        sn.forEach(doc=>{
            const newThread = doc.data()
            {newThread.id=doc.id, newThread.created_time = changeDateFormat(doc.data().created_time)}
            console.log(newThread)
            console.log(changeDateFormat(doc.data().created_time))
        })
    })
}