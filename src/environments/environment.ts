export const environment = {
    production: false
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFWMjYPV3Icg1xYHw8vYY3N-wh50nu1qg",
  authDomain: "discord-app-16fb6.firebaseapp.com",
  databaseURL: "https://discord-app-16fb6-default-rtdb.firebaseio.com",
  projectId: "discord-app-16fb6",
  storageBucket: "discord-app-16fb6.appspot.com",
  messagingSenderId: "608188617891",
  appId: "1:608188617891:web:9258d4717cdaea74d31b16",
  measurementId: "G-0DWF4ZDM17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);