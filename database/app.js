// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAsQpWY0Ahrlh7k7qlwX7guYJCZN3msj_U",
  authDomain: "together-click-5a5dd.firebaseapp.com",
  projectId: "together-click-5a5dd"
});

//Creando una variable para firebase
const db = firebase.firestore();
//-------------------------------------------------------------------
const btnSavePost = document.getElementsByClassName("btn-save")[0];

// **************** GUARDANDO ELEMENTOS EN FIRESTORE *****************


const guardar = () => {
  const nombre = document.getElementById("nombre").value;

  db.collection("users").add({
    first: nombre,
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById("nombre").value = "";
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
};

btnSavePost.addEventListener("click", guardar);


// **************** MOSTRANDO ARCHIVOS *****************
const tabla = document.getElementById("tabla");
tabla.innerHTML = "";
//onSnapshot es una agente de cambio, va a estar vigilando y ayuda a que los cambios se muestren en tiempo real
db.collection("users").onSnapshot((querySnapshot) => {
  tabla.innerHTML = "";
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().first}`);
      tabla.innerHTML  += `
              <tr>
                <td class="my-3">${doc.data().first}</td>
                <td class="my-6"><button class="btn btn-danger" onclick="eliminar('${doc.id}')" id="btnEliminar">Eliminar</button></td>
                <td class="my-6"><button class="btn btn-warning" onclick="editar('${doc.id}', '${doc.data().first}')">Editar</button></td>
              </tr>
      `
  });
});

// **************** BORRANDO ELEMENTOS *****************
const eliminar = (id) => {
  db.collection("users").doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
};


// **************** EDITANDO POST *****************
const editar = (id, nombre,) => {
  document.getElementById("nombre").value = nombre;

  const botonEditar = document.getElementById("editar");
//wasingtonRef se utiliza para hacer un update
  botonEditar.onclick = () => {
    const washingtonRef = db.collection("users").doc(id);
    // Set the "users" field of  id
    const nombre = document.getElementById("nombre").value;

      return washingtonRef.update({
        first: nombre,

      })
      .then(() => {
          console.log("Document successfully updated!");
          boton.innerHTML = "Guardar";
          document.getElementById("nombre").value = "";
      })
      .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
  }
  };




 
