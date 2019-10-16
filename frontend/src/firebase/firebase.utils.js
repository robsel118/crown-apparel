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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
