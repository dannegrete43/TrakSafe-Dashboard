// In /js/auth.js

// Import functions from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0C9wkH7b23-njimXHRf793KI0-L4UtFw",
    authDomain: "inspectionapp2-88221.firebaseapp.com",
    projectId: "inspectionapp2-88221",
    storageBucket: "inspectionapp2-88221.appspot.com",
    messagingSenderId: "805230972315",
    appId: "1:805230972315:web:d00e2d1a1869aefee1653e",
    measurementId: "G-WHXE1XECQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// This function checks if the user is logged in. If not, it redirects to the login page.
function protectPage() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            // No user is signed in, so redirect to the login page.
            console.log("No user found, redirecting to login.");
            // Make sure your login page is named 'login.html' or change the path here
            window.location.href = '/login.html'; 
        }
    });
}

// Export the things we'll need in other files
export { auth, db, protectPage };
