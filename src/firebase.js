// import firebase from 'firebase'
// const firebaseConfig = {
//     apiKey: "AIzaSyDfIpjjksZqPouGVuBmizF2ZOSXRukc3DY",
//     authDomain: "discord-clone-4d6dc.firebaseapp.com",
//     projectId: "discord-clone-4d6dc",
//     storageBucket: "discord-clone-4d6dc.appspot.com",
//     messagingSenderId: "254086194535",
//     appId: "1:254086194535:web:2baeb92988de83c36bfbc2"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   export {auth,provider};
//   export default db;


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDfIpjjksZqPouGVuBmizF2ZOSXRukc3DY",
    authDomain: "discord-clone-4d6dc.firebaseapp.com",
    projectId: "discord-clone-4d6dc",
    storageBucket: "discord-clone-4d6dc.appspot.com",
    messagingSenderId: "254086194535",
    appId: "1:254086194535:web:2baeb92988de83c36bfbc2"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth,db };
