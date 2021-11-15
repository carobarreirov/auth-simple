import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

// Initialize Firebase Authentication
const auth = getAuth();

const fForm = document.getElementById("signout-form");

fForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    signOut(auth).then(() => {
        // Sign-out successful.
        alert("SIGN OUT SUCCESFULLY");
      }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
      });
});