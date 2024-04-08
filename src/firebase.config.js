// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACXXt4NhS1o-STIc7VIvJ6mOKM0d6GKBI",
  authDomain: "b9a9-real-estate-rfaraf.firebaseapp.com",
  projectId: "b9a9-real-estate-rfaraf",
  storageBucket: "b9a9-real-estate-rfaraf.appspot.com",
  messagingSenderId: "573405266887",
  appId: "1:573405266887:web:29f704ee5d58fc83c88fe2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
