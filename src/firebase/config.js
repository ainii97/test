import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyTJsayeGMbTyne7_81DG86TAcK_IfH3w",
  authDomain: "test-646f3.firebaseapp.com",
  projectId: "test-646f3",
  storageBucket: "test-646f3.appspot.com",
  messagingSenderId: "574584277928",
  appId: "1:574584277928:web:1ee0d227cf98326ff1eb9d",
  measurementId: "G-HNY4EQMJVG",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
