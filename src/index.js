// import firebase library
import { initializeApp } from 'firebase/app';

// import Firestore functions
import { 
    getFirestore,
    collection,
    getDocs,
} from 'firebase/firestore';

// projwct config
const firebaseConfig = {
    apiKey: "AIzaSyDgFT_a4AFYV17_yeMlwQOEZZGJ71Rw2Gk",
    authDomain: "fir-9-do-6b87f.firebaseapp.com",
    projectId: "fir-9-do-6b87f",
    storageBucket: "fir-9-do-6b87f.appspot.com",
    messagingSenderId: "926747255617",
    appId: "1:926747255617:web:8870b670471dd9fa26b7c0"
};

// connect to Firebase back end
initializeApp(firebaseConfig);

// initialize services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'students');

// get documents
getDocs(colRef)
    .then(snapshot => {
        snapshot.forEach(doc => {
            let students = doc;
            let docId = students.id;
            console.log(students.data());
            console.log(docId)
        })
    })