initFirebase ();
function signInWithGoogle (){
  //Sign into Firebase using popup auth and google as the identify provider
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase.auth().signInWithPopup(provider)
  .then (function(result){
    //this give you a google access token 
    var token = result.credential.accessToken;
    //The signed-in users info
    var user = result.user;
    console.log(user.uid);

    window.location = "home.html";
  })
  .catch(function(error){
    //Handle errors here
    var errorCode = error.code;
    var errorMessage = error.message;
    //The email of the user's account used
    var credential = error.credential;
    console.log(credential);
    console.log(errorCode);
  });
}