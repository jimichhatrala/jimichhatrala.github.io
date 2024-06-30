import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBEP06qyVpyScKDvmEdjFINYHQX7DCrbo",
  authDomain: "react-js-blog-website-83bf6.firebaseapp.com",
  projectId: "react-js-blog-website-83bf6",
  storageBucket: "react-js-blog-website-83bf6.appspot.com",
  messagingSenderId: "140599101594",
  appId: "1:140599101594:web:5227ed458ded46284cb723",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });

  return user;
};
