import firebase from "firebase/app";
import "firebase/database";

let config = {
  apiKey: "AIzaSyDyfFGICLZ78PL0OI-g0lkbKmo3HOOnKhI",
  authDomain: "project-f12e1.firebaseapp.com",
  databaseURL: "https://project-f12e1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-f12e1",
  storageBucket: "project-f12e1.appspot.com",
  messagingSenderId: "470228768415",
  appId: "1:470228768415:web:fa219d8acf3c5f42a3f4aa"
};
firebase.initializeApp(config);

export default firebase.database();
