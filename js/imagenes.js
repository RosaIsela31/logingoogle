window.onload = inicializar;

console.log("holaaaaa");

function inicializar(){
   // realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
   authService.signInAnonymously()
   .catch(function(error) {
     console.error('Detectado error de autenticación', error);
   });


  document.getElementById("fichero").addEventListener("change", function(evento){
    evento.preventDefault();
    const archivo = evento.target.files[0];
    subirImagenAFirebase(archivo);
  })


  // const storageRef = firebase.storage().ref();
}

function subirImagenAFirebase(archivo){
  // creo una referencia al lugar donde guardaremos el archivo
  var refStorage = storageService.ref('imagenes').child(archivo.name);
   // Comienzo la tarea de upload
   var uploadTask = refStorage.put(archivo);
   // defino un evento para saber qué pasa con ese upload iniciado
      uploadTask.on('state_changed', null,
        function(error){
          console.log('Error al subir el archivo', error);
        },
        function(){
          console.log('Subida completada');
          mensajeFinalizado(uploadTask.snapshot.downloadURL, uploadTask.snapshot.totalBytes);
        }
      );
    }

    // a esta función la invocamos para mostrar el mensaje final después del upload
    function mensajeFinalizado(url, bytes) {
      var elMensaje = document.getElementById('mensaje');
      var textoMensaje = '<p>Subido el archivo!';
      textoMensaje += '<br>Bytes subidos: ' + bytes;
      textoMensaje += '<br><a href="' + url + '">Ver el fichero</a></p>';
      elMensaje.innerHTML = textoMensaje;
    }


  // const imagenASubir = fichero.files[0];

  // const uploadTask = storageRef.child("imagenes/" + imagenASubir.name).put(imagenASubir);
  // const referencia = referencia.child('imagenes');

