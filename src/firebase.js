import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
 apiKey: "AIzaSyA3KY6X6ce98lQd-XtRI5HaAFli1rC-95o",
    authDomain: "sla-dive.firebaseapp.com",
    projectId: "sla-dive",
    storageBucket: "sla-dive.appspot.com",
    messagingSenderId: "1008752397295",
    appId: "1:1008752397295:web:1fa46be1bc3461b32d841a"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
