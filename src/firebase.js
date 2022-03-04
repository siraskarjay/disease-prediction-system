import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBiQFEUMj_2W5itgRJ_pDWogrv0RqTEdZY",
    authDomain: "disease-prediction-syste-6e604.firebaseapp.com",
    projectId: "disease-prediction-syste-6e604",
    storageBucket: "disease-prediction-syste-6e604.appspot.com",
    messagingSenderId: "629329411999",
    appId: "1:629329411999:web:67691bd622bfca641847aa",
    measurementId: "G-ZP7TCFZLH8"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;