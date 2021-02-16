import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBxNVTxINHlHuj-NpQ5j_TutJARzu6vve0",
    authDomain: "linkedin-21bfd.firebaseapp.com",
    projectId: "linkedin-21bfd",
    storageBucket: "linkedin-21bfd.appspot.com",
    messagingSenderId: "677685741175",
    appId: "1:677685741175:web:b9371549bcec12aec0e872"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };