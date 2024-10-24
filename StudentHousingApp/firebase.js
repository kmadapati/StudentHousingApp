// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3jnbbCL9PZ-XLEgeVRQlGZburVSuS93o",
    authDomain: "meadow-3d01e.firebaseapp.com",
    projectId: "meadow-3d01e",
    storageBucket: "meadow-3d01e.appspot.com",
    messagingSenderId: "715836665664",
    appId: "1:715836665664:web:ded647b50669156d1894a5",
    measurementId: "G-MGVYJBCDXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };