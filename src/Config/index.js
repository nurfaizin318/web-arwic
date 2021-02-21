import Firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQoJ59PU5Wk543xoh6PYXmdhVrRaA-Eq8",
  authDomain: "webarwics-25d24.firebaseapp.com",
  projectId: "webarwics-25d24",
  storageBucket: "webarwics-25d24.appspot.com",
  messagingSenderId: "365500966389",
  appId: "1:365500966389:web:1e175cb47979a219f02cbc",
  measurementId: "G-3W2B1S7QT9"
};

let db = Firebase.initializeApp(firebaseConfig);
export default db;