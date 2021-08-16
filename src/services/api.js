import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const api = firebase.initializeApp({
  apiKey: "AIzaSyAiEOEBK9a8DM7t0pG6Q-mHv8ET0-wHGKU",
  authDomain: "react-simple-todo-51b9c.firebaseapp.com",
  projectId: "react-simple-todo-51b9c",
  storageBucket: "react-simple-todo-51b9c.appspot.com",
  messagingSenderId: "717968360948",
  appId: "1:717968360948:web:b20158278331c1fd2f65a1",
  measurementId: "G-FK318P0LVQ",
});

export default api;
