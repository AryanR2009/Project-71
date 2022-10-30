import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD0HedunK0uWhEWkShzxE2RJIxjpMZmKrc",
    authDomain: "e-biker-fdeab.firebaseapp.com",
    projectId: "e-biker-fdeab",
    storageBucket: "e-biker-fdeab.appspot.com",
    messagingSenderId: "795259688426",
    appId: "1:795259688426:web:b019f207b3fe5249e68e93"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
