// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3LXz_LXln4MwLIr5UYe2MFLLhbhiPt9Y",
  authDomain: "wecare2-96eef.firebaseapp.com",
  projectId: "wecare2-96eef",
  storageBucket: "wecare2-96eef.appspot.com",
  messagingSenderId: "303188155166",
  appId: "1:303188155166:web:9c0baf1e5405da7282c70f",
  measurementId: "G-9KZMKQ51GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()

export {
    app, auth
}