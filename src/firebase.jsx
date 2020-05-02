import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVecsHPnolTVZMO4KUV0r4RKvhJXFLoOI",
  authDomain: "m-city-576b4.firebaseapp.com",
  databaseURL: "https://m-city-576b4.firebaseio.com",
  projectId: "m-city-576b4",
  storageBucket: "m-city-576b4.appspot.com",
  messagingSenderId: "599465843077",
  appId: "1:599465843077:web:713d37b7f7a8a3dd720cec",
  measurementId: "G-80NE1ELBLN",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
