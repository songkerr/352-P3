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

// ================ database ================ //

var rootRef = firebase.database().ref();
var tracksRef = rootRef.child('Tracks');

tracksRef.orderByChild("Size").equalTo("small").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    
    $("#smlResults").append("<div class='infodiv'> <a href=" + newTrack.URL + " <p> " + newTrack.Track + "</p><p> Distance: " + newTrack.Distance + "<br> Time: Approximately " + newTrack.Time + "<br> Suitable for " + newTrack.Size + " dogs of " + newTrack.Fitness + " fitness</p></a></div>");
});

tracksRef.orderByChild("Size").equalTo("medium").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    
    $("#medResults").append("<div class='infodiv'> <a href=" + newTrack.URL + " <p> " + newTrack.Track + "</p><p> Distance: " + newTrack.Distance + "<br> Time: Approximately " + newTrack.Time + "<br> Suitable for " + newTrack.Size + " dogs of " + newTrack.Fitness + " fitness</p></a></div>");
});

tracksRef.orderByChild("Size").equalTo("large").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    
    $("#lrgResults").append("<div class='infodiv'> <a href=" + newTrack.URL + " <p> " + newTrack.Track + "</p><p> Distance: " + newTrack.Distance + "<br> Time: Approximately " + newTrack.Time + "<br> Suitable for " + newTrack.Size + " dogs of " + newTrack.Fitness + " fitness</p></a></div>");
});

function showPage() {
    var sel = document.getElementById('dogsize');
    var option = sel.options[sel.selectedIndex].value;
    window.location.replace(option + ".html");
}

// ================ dog breed list ================ //

var query = firebase.database().ref("Dogs");
query.once("value")
    .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            //console.log(childData.Breed);
            $("#breedsList").append("<option value='" + childData.Breed + "'</option>" )
        });

    });

// ================ user signup/in ================ //

//var provider = new firebase.auth.GoogleAuthProvider();
//
//function signin() {
//    firebase.auth().signInWithPopup(provider).then(function(result) {
//        // This gives you a Google Access Token. You can use it to access the Google API.
//        var token = result.credential.accessToken;
//        // The signed-in user info.
//        var user = result.user;
//        console.log(user.displayName);
//        // ...
//    }).catch(function(error) {
//        // Handle Errors here.
//        var errorCode = error.code;
//        var errorMessage = error.message;
//        // The email of the user's account used.
//        var email = error.email;
//        // The firebase.auth.AuthCredential type that was used.
//        var credential = error.credential;
//        // ...
//        });
//}

//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-//

const firebaseDatabase = firebase.database();
const firebaseAuth = firebase.auth();

// Get Elements
var userName = document.getElementById('nameText');
var emailText = document.getElementById('emailText');
var passwordText = document.getElementById('passwordText');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Add login event
signinBtn.addEventListener('click', e => {
     // Get email and pass
     var email = emailText.value;
     var pass = passwordText.value;
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
     var email = emailText.value;
     var password = passwordText.value;
     const auth = firebase.auth();
     // Signin
     const promise = auth.createUserWithEmailAndPassword(email, password);
     promise.catch(e => console.log(e.message));
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error:" + errorMessage);
});

$('#signupBtn').click (function (e) {
   e.preventDefault();
});

//// Logout
//logoutBtn.addEventListener('click', e=> {
//    firebase.auth().signOut();
//});

 // Add a realtime listener
 firebase.auth().onAuthStateChanged(firebaseUser => {
     if(firebaseUser) {
         var userId = firebaseUser.uid;
         var userEmail = firebaseUser.email;
         var userName = nameText.value;
         console.log(firebaseUser); 
         setTimeout(function () {
            window.location.href = "register.html";
        }, 1800);
         //logoutBtn.classList.remove('hide');
// ------------------------------------------------------------ //
        rootRef.child('Users').child(userId).once("value", function(snapshot){
            var ifExists = snapshot.exists();
            if(ifExists){
              console.log('already in system');
            } else{
              rootRef.child('Users').child(userId).set({name: userName, email: userEmail});
            }
        });
// ------------------------------------------------------------ //
        // listen for form submit
        document.getElementById('registerdog').addEventListener('submit', submitDogForm);
         
        //function to get form values
        function getInputVal(id){
            return document.getElementById(id).value;
        }

        function submitDogForm(e){
            e.preventDefault();
            var dogName = getInputVal('dogName');
            var dogAge = getInputVal('dogAge');
            //save message - put the variable names in here
            saveNewDog(dogname, dogage);
            document.getElementById('registerdog').reset();
        }

        var newDogRef = firebase.database().ref('Users').child(userId);

        function saveNewDog(dogname, dogage){
          var dogInfoRef = newDogRef.push();
          dogInfoRef.set({
            dogname: dogName,
            dogage: dogAge,
          });
            console.log("information saved");
        }
// ------------------------------------------------------------ //
     } else {
         console.log('not logged in');
         window.alert("login fail");
         //logoutBtn.classList.add('hide');
     }
 });