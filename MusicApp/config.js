// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADbP4Ut3RR_YIF3ktUBoQmVbp7JPklSok",
  authDomain: "musicapp1409.firebaseapp.com",
  projectId: "musicapp1409",
  storageBucket: "musicapp1409.appspot.com",
  messagingSenderId: "21839881058",
  appId: "1:21839881058:web:7ca16f1bee2e34bfea023b"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};