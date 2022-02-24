// Firebase functions
import { initializeApp } from 'firebase/app';

import {
    getFirestore, 
    collection,
    getDocs
} from 'firebase/firestore';

// firebase auth function
import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgFT_a4AFYV17_yeMlwQOEZZGJ71Rw2Gk",
    authDomain: "fir-9-do-6b87f.firebaseapp.com",
    projectId: "fir-9-do-6b87f",
    storageBucket: "fir-9-do-6b87f.appspot.com",
    messagingSenderId: "926747255617",
    appId: "1:926747255617:web:8870b670471dd9fa26b7c0"
};

// initializing firebase application
initializeApp(firebaseConfig);

// create a reference to db
const db = getFirestore();

// create a ref to the collection
const colRef = collection(db, 'students');

// get docs function
getDocs(colRef)
    .then(snapshot => {
        snapshot.forEach(doc => {
            let docId = doc.id;
            console.log(doc.data())
            console.log(docId)
        })
    })
    .catch(err => alert(err.message))

// auth function
const auth = getAuth();

// get the form
const signupForm = document.querySelector('.signupForm');
// attach submit event listener
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get the form fields
    let email = signupForm.email.value;
    let password = signupForm.password.value;

    // call createUserWithEmail function
    createUserWithEmailAndPassword(auth,email,password)
        .then(cred => {
            console.log(cred.user);
        })
        .catch(err => console.log(err.message));
})