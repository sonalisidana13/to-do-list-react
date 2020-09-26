  import firebase from 'firebase';

  const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6j7DKQa8QHeW5pnzT0wxs5b-nT8ghkD0",
    authDomain: "react-to-do-app-ab035.firebaseapp.com",
    databaseURL: "https://react-to-do-app-ab035.firebaseio.com",
    projectId: "react-to-do-app-ab035",
    storageBucket: "react-to-do-app-ab035.appspot.com",
    messagingSenderId: "909402297588",
    appId: "1:909402297588:web:44b10fdbf4521daef7faa1",
    measurementId: "G-CE1S42XP8B"
  });

  const db = fireBaseApp.firestore();

  export default db ;
//   const auth = firebase.auth();