import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCUuZsQck7WsUSrDFkunp6tLgylV99Mk2A",
  authDomain: "net-ninja-marioplan-cb45a.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-cb45a.firebaseio.com",
  projectId: "net-ninja-marioplan-cb45a",
  storageBucket: "net-ninja-marioplan-cb45a.appspot.com",
  messagingSenderId: "557299722374",
  appId: "1:557299722374:web:d85df04354cd1347954907",
  measurementId: "G-JQEEHX76SB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 