import { getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

// Initialize Firebase Authentication
const auth = getAuth();

const fForm = document.getElementById("signin-form");

const fEmail = document.getElementById("signin-email");
const fPassword = document.getElementById("signin-password");

fForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = fEmail.value;
    const password = fPassword.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("SIGNED IN SUCCESFULLY");
      // TAKE USER TO HOME PAGE
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
    });
});