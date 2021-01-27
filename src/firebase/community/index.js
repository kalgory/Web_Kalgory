// import Firebase from 'firebase/app'
import {getQuestionReference} from "@/firebase/community/reference";

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

export function readNewQuestionPost(threadList) {
    const ref = getQuestionReference()
    ref.orderBy('created_time', 'desc').limit(5).get().then(sn => {
        sn.forEach(doc => {
            const newThread = doc.data()
            {
                newThread.id = doc.id, newThread.created_time = changeDateFormat(doc.data().created_time)
            }
            threadList.push(newThread)
        })
    }).catch(function (err) {
        console.log(err)
    })
}
