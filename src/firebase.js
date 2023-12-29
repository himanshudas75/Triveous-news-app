import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig =firebase.initializeApp( {
    apiKey: "AIzaSyAHV8hmcca98jy1GQIo43lsvMlQSBaoT4g",
    authDomain: "news-app-61f47.firebaseapp.com",
    projectId: "news-app-61f47",
    storageBucket: "news-app-61f47.appspot.com",
    messagingSenderId: "297900444942",
    appId: "1:297900444942:web:119c8bfebc6d126ef0db5f",
    measurementId: "G-36N2N1EX6T"
  });
  export default firebaseConfig;
