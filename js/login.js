// In /js/login.js
import { auth } from './auth.js'; 
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

onAuthStateChanged(auth, user => {
    if (user) {
        // If user is already logged in, send them to the dashboard.
        window.location.href = '/traksafe_dashboard_live.html';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    errorMessage.classList.add('hidden');

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // On success, the onAuthStateChanged listener above will handle the redirect.
            console.log("Login successful!");
        })
        .catch((error) => {
            errorMessage.textContent = "Error: Invalid email or password.";
            errorMessage.classList.remove('hidden');
        });
});
