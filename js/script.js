// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAMGxj5EH5ybAkSkFL7DaTKi84CgZChG18",
    authDomain: "p3-7860d.firebaseapp.com",
    databaseURL: "https://p3-7860d.firebaseio.com",
    projectId: "p3-7860d",
    storageBucket: "p3-7860d.appspot.com",
    messagingSenderId: "806105097238"
  };
  firebase.initializeApp(config);

const firebaseDatabase = firebase.database();
const firebaseAuth = firebase.auth();

// Get Elements
const emailText = document.getElementById('emailText');
const passwordText = document.getElementById('passwordText');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');

// Add login event
signinBtn.addEventListener('click', e => {
    // Get email and pass
    const email = emailText.value;
    const pass = passwordText.value;
    const auth = firebase.auth();
    // Signin
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))
    .then(function(user) {
    });
});

// Add signup event
signupBtn.addEventListener('click', e => {
    // Get email and pass
    const email = emailText.value;
    const pass = passwordText.value;
    const auth = firebase.auth();
    // Signin
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
    }
});