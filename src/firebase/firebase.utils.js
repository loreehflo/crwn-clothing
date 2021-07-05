import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0r3qQdNLJ5z2FgafdU0Tol4E4iU7_AlY",
    authDomain: "crwn-db-5f5b8.firebaseapp.com",
    projectId: "crwn-db-5f5b8",
    storageBucket: "crwn-db-5f5b8.appspot.com",
    messagingSenderId: "334983252174",
    appId: "1:334983252174:web:bb250dd5d9a91c8138e89f",
    measurementId: "G-60YW7HJ6DW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;