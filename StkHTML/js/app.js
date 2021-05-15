//Creamos la instancia del proveedor del servicio de autenticacion.
var provider = new firebase.auth.GoogleAuthProvider();

//Observador sobre el botón
$('#btnLogin').click(function(){

    firebase.auth()
      .signInWithPopup(provider)
        .then((result) => {//Promesa que se ejecuta cuando el usuario ha iniciado sesion.
            console.log("", result.user);
            $('#btnLogin').hide();
            $('#root').append("<img src='"+ result.user.photoURL +"' />");

            guardarUsuario(result.user);
        });

});

function guardarUsuario(user){
  var usuario = {
    uid: user.uid,
    nombre: user.displayName,
    email: user.email,
    foto: user.photoURL
  }

  //Agrega una nueva entrada a la base de datos.
  //firebase.database().ref("usuariosAutenticados").push(usuario);
  
  //Actualiza la llave que le corresponde a través del método set en la rama usuariosAutenticados.
  firebase.database().ref("usuariosAutenticados/"+user.uid).set(usuario);

}

//Guardar base de datos.
$('#btnGuardar').click(function(){
  //Enviamos los datos a la base de datos. 
  //La función set escribe en toda la rama y actualiza la llave.
  firebase.database().ref("usuariosAutenticados").set({
    nombre: "José Luis Rojas Gómez",
    edad: "39",
    sexo: "2,2",
  })
});

//Lectura de la base de datos.
//Escucha en la rama usuariosAutenticados de la base de datos cuando alguien agregue algo y haz lo siguiente.
//En firebase el snapshot (s) = los datos que se reciben de la base de datos.
firebase.database().ref("usuariosAutenticados").on("child_added", function(s){
  var usuario = s.val();
  $('#root').append("<img src='"+ usuario.foto +"' />");
})