import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCkEY_jF2P2tSz2CIZ4iuOFlCWvpB_qdQM",
  authDomain: "the-dojo-3010.firebaseapp.com",
  projectId: "the-dojo-3010",
  storageBucket: "the-dojo-3010.appspot.com",
  messagingSenderId: "921674197555",
  appId: "1:921674197555:web:1351b692ad683aa6331146"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }