
  
// import firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";

import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC_I2thOUwAq0zSxBVVDP91GDjnj6rQyuw",
  authDomain: "laneartdesign-3b5c0.firebaseapp.com",
  projectId: "laneartdesign-3b5c0",
  storageBucket: "laneartdesign-3b5c0.appspot.com",
  messagingSenderId: "638606377113",
  appId: "1:638606377113:web:9f8feb1c9c8905d1fb3808",
  measurementId: "G-J34B3DWN0R"
};
const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db