import firebase from "firebase/app";
import "firebase/database";

let config = {
  apiKey: "XXXXXXXXXXX",
  authDomain: "XXXXXXXXXXX",
  projectId: "XXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "XXXXXXXXXXX"
};
firebase.initializeApp(config);

export default firebase.database();
