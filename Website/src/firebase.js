// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAfpWIQsYC8FqL8KwjdYJoUttE6NxoyHPg",
  authDomain: "group-project1-8f7ba.firebaseapp.com",
  projectId: "group-project1-8f7ba",
  storageBucket: "group-project1-8f7ba.appspot.com",
  messagingSenderId: "696447525318",
  appId: "1:696447525318:web:c640b7bc7e6914734652c7",
  measurementId: "G-RDVBDL9YRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
