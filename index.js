



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function register() {
    

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            var user = auth.currentUser;
            alert('User created');
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage);
        });
}
