import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

export const firebaseAPP = firebase.initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
})

export default function install (Vue) {
    Object.defineProperty(Vue.prototype, '$firebase', {
        get() {
            return firebaseAPP
        }
    })
}