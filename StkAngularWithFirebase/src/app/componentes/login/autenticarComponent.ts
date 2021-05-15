import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios/usuario.model';

import { AutenticacionService } from '../../servicios/seguridad/autenticacion.service';

@Component({
    selector: 'autenticar',
    templateUrl: './autenticarComponent.html'
})

export class AutenticarComponent implements OnInit {
    msgLogin: string;
    msgLogout: string;

    //usuario = {} as Usuario
    usuario: Usuario;

    constructor(private autenticacionService: AutenticacionService){
        this.msgLogin = "Login";
        this.msgLogout = "Logout";
    }

    ngOnInit(){
        console.log("LoginComponent inicializado...")
    }

    login(){
        this.autenticacionService.login();
    }

    logout(){
        this.autenticacionService.logout();

        this.usuario = null;
    }

    isLogged(){
        this.usuario = this.autenticacionService.usuario;

        return this.autenticacionService.isLogged();
    }
}