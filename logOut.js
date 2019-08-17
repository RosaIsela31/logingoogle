const btnLogOut = document.getElementById("btnLogOut");

const logOut = () => firebase.auth().signOut();

const logOutOnClick = (evt) => {
  evt.preventDefault();
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      logOut()
        .then(() => {
          alert('Hasta Pronto');
          location.hash = '#/ingreso';
        });
    } else {
      location.hash = '#/registro';
    }
  });
};

btnLogOut.addEventListener('click', logOutOnClick);