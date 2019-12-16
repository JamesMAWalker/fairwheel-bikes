import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtTvQXPS7z3hP6_UftFt4OSHadkoFAVBE",
    authDomain: "fairwheel-bikes.firebaseapp.com",
    databaseURL: "https://fairwheel-bikes.firebaseio.com",
    projectId: "fairwheel-bikes",
    storageBucket: "fairwheel-bikes.appspot.com",
    messagingSenderId: "756675394526",
    appId: "1:756675394526:web:c662a3d7cd57b0cd697b4f",
    measurementId: "G-SKJ88WSN2N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;