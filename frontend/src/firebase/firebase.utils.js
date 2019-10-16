import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDtIk-TjYWOagNOXSLAC3Xqb7YYNpF9k0s',
  authDomain: 'crown-apparel-72b92.firebaseapp.com',
  databaseURL: 'https://crown-apparel-72b92.firebaseio.com',
  projectId: 'crown-apparel-72b92',
  storageBucket: 'crown-apparel-72b92.appspot.com',
  messagingSenderId: '717724030681',
  appId: '1:717724030681:web:dae6bb0680e84f460bd0c8'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user'.error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;