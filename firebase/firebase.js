
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBXOzJ__zRqFW9k71PuueFaaI0RSKYm-Tw",

    authDomain: "learnfirebase-6339a.firebaseapp.com",
  
    projectId: "learnfirebase-6339a",
  
    storageBucket: "learnfirebase-6339a.appspot.com",
  
    messagingSenderId: "249880101043",
  
    appId: "1:249880101043:web:255e24a9de8c548d1170c6",
  
    measurementId: "G-3B5YBDB3P4"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore;