import firebase from 'firebase';
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
 
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