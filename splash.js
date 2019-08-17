// const signInWithGoogle = () => {
//   //Sign into Firebase using popup auth and google as the identify provider
//   const provider = new firebase.auth.GoogleAuthProvider();
//   // provider.addScope("profile");
//   // provider.addScope("email");
//   firebase.auth().signInWithPopup(provider)
//   .then ((result) => {
//     //this give you a google access token 
//     // var token = result.credential.accessToken;
//     //The signed-in users info
//     var user = result.user;
//     console.log(user.uid);

//     window.location = "home.html";
//   })
//   .catch((error) => {
//     //Handle errors here
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     //The email of the user's account used
//     var credential = error.credential;
//     console.log(credential);
//     console.log(errorCode);
//   });
// }

const signInWithGoogle = () => {
  //Sign into Firebase using popup auth and google as the identify provider
  const provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider)
  .then ((result) => {
    //this give you a google access token 
    const token = result.credential.accessToken;
    //The signed-in users info
    const user = result.user;
    console.log(user.uid);  
  }).then(() => window.location = "home.html")
  .catch((error) => {
    //Handle errors here
    const errorCode = error.code;
    const errorMessage = error.message;
    //The email of the user's account used
    const credential = error.credential;
    console.log(credential);
    console.log(errorCode);
  });
}
