import React from 'react';
import './style.css';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyDwaatnrPGX1cmd_iPQawQy6to-3weRfgM",
  authDomain: "test2-b0c78.firebaseapp.com",
  databaseURL: "https://test2-b0c78-default-rtdb.firebaseio.com",
  projectId: "test2-b0c78",
  storageBucket: "test2-b0c78.appspot.com",
  messagingSenderId: "1020612965446",
  appId: "1:1020612965446:web:eb1e62394169e72485c647",
  measurementId: "G-XYPBVB6JF6"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var database = firebase.database();
function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}
writeUserData(1, "1", "hey@hey.com")
export default function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <p> </p>
    </div>
  );
}
