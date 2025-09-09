// In /js/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0C9wkH7b23-njimXHRf793KI0-L4UtFw",
    authDomain: "inspectionapp2-88221.firebaseapp.com",
    projectId: "inspectionapp2-88221",
    storageBucket: "inspectionapp2-88221.firebasestorage.app",
    messagingSenderId: "805230972315",
    appId: "1:805230972315:web:d00e2d1a1869aefee1653e",
    measurementId: "G-WHXE1XECQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// This function protects pages by checking if a user is logged in.
function protectPage() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            // If no user is logged in, redirect to the login page.
            window.location.href = '/index.html'; 
        }
    });
}

// Export the things we need in other files
export { auth, db, protectPage };
