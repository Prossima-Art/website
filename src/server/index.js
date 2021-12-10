// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_I2thOUwAq0zSxBVVDP91GDjnj6rQyuw",
  authDomain: "laneartdesign-3b5c0.firebaseapp.com",
  databaseURL: "https://laneartdesign-3b5c0-default-rtdb.firebaseio.com",
  projectId: "laneartdesign-3b5c0",
  storageBucket: "laneartdesign-3b5c0.appspot.com",
  messagingSenderId: "638606377113",
  appId: "1:638606377113:web:324fc9359b0f65a1fb3808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = app
export default db