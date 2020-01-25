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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    // const collectionSnapShot = await collectionRef.get();

    // console.log({ collection: collectionSnapShot.docs.map(
    //     doc => doc.data()
    // ) });

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
    
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
   ) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        console.log(newDocRef);
        batch.set(newDocRef, obj);
    });
    
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {});
}

// firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;