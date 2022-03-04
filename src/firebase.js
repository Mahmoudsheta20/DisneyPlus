import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCJmXhdAuOaKhcpZWuJxnCqvpzP21VdUO4",
    authDomain: "desny-plus.firebaseapp.com",
    projectId: "desny-plus",
    storageBucket: "desny-plus.appspot.com",
    messagingSenderId: "290351524558",
    appId: "1:290351524558:web:c700f70baa2eb46f2dbe9f",
    measurementId: "G-EVX46B5N44"
};
// Initialize Firebase with a "default" Firebase project
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;