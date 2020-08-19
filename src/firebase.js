import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHdfSeAmpJOAg6beUJac3MpNTfe8vZCg0",
    authDomain: "tinder-clone-829b1.firebaseapp.com",
    databaseURL: "https://tinder-clone-829b1.firebaseio.com",
    projectId: "tinder-clone-829b1",
    storageBucket: "tinder-clone-829b1.appspot.com",
    messagingSenderId: "513689170545",
    appId: "1:513689170545:web:a00b75b7e76cbcd1afe1d0",
    measurementId: "G-LHPT30T0MW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;