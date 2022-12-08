import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCLdLYMLDqqY4bHk40y52CyWrtzP0llpxM",
    authDomain: "chat-web-5f854.firebaseapp.com",
    projectId: "chat-web-5f854",
    storageBucket: "chat-web-5f854.appspot.com",
    messagingSenderId: "160058367127",
    appId: "1:160058367127:web:bcfb4e15d5d2624ccd1dd2",
    measurementId: "G-L3HTJS01K9"
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
// Initialize Firebase