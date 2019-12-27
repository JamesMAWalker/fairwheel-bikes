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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email, 
                createdAt, 
                ...additionalData
            })
        }
        catch (err) {
            console.log('error creating user', err.message);
            
        }
    }

    return userRef;
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;