import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { Usuario } from 'src/app/model/usuarios/usuario.model';

@Injectable({
    providedIn: 'root'
})

export class AutenticacionService {

    usuario: Usuario;
    
    constructor(private afAuth: AngularFireAuth){

        this.afAuth.authState.subscribe(user => {

                console.log("Estado autorización: " + user);

                this.usuario = this.obtenerDatosDelUsuario(user);
            }
        );
    }

    login() {
        console.log("Iniciando sesión del usuario...");

        this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        
        console.log("Sesión del usuario iniciada.");

    }

    logout(){

        console.log("Finalizando sesión del usuario...");

        this.afAuth.signOut().then(() => {

            console.log("Los datos del usuario fuereon reseteados.")
            this.usuario = null;

        });

        console.log("Sesion del usuario finalizada.");
    }

    isLogged(){
        
        if(null != this.usuario){
            
            console.log(`El usuario [${this.usuario.nombre}] ya se encuentra autenticado.`);

            return true;

        } else {
            
            console.log(`El usuario no se encuentra autenticado.`);

            return false;
        }
    }

    private obtenerDatosDelUsuario(user: firebase.User): Usuario {

        let usuario: Usuario | null = null;

        if(user!= null) {
                    
            usuario = {
                id: user.uid,
                nombre: user.displayName,
                email: user.email,
                telefono: user.phoneNumber,
                fotoURL: user.photoURL
            }
        }

        console.log(`Usuario autenticado [${usuario}].`);

        return usuario;
    }

}