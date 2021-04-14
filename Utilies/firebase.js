import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBMYAQWqr0Et-yQm24m_kKSyS4tg4FsAHM",
    authDomain: "untecnico-f130a.firebaseapp.com",
    projectId: "untecnico-f130a",
    storageBucket: "untecnico-f130a.appspot.com",
    messagingSenderId: "330845083711",
    appId: "1:330845083711:web:780164de902ac622bec08a"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
