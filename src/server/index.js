
  
// import firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";

import 'firebase/firestore';
const firebaseConfig = {
  
};
const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db