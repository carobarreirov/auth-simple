import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

// Initialize Firebase Authentication
const auth = getAuth();

const fForm = document.getElementById("signup-form");

const fEmail = document.getElementById("signup-email");
const fPassword = document.getElementById("signup-password");

fForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = fEmail.value;
    const password = fPassword.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("SUCCESFULL REGISTER"); 
            // ...
            })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            alert(errorMessage);
            // ..
        });
});