// import firebase library
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA81fq2bHjctsjfUXd2i64b3AG1tVioSTU",
    authDomain: "therapist-connect.firebaseapp.com",
    projectId: "therapist-connect",
    storageBucket: "therapist-connect.appspot.com",
    messagingSenderId: "308490251184",
    appId: "1:308490251184:web:57251778e09fe87b164475"
};

// connect to Firebase back end
initializeApp(firebaseConfig);