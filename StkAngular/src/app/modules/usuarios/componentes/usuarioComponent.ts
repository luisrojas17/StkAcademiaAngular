import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Usuario } from '../model/usuario.model';
import { UsuarioService } from '../servicios/usuario.service';
import { from } from 'rxjs';

@Component({
    selector: 'usuarios',
    templateUrl: './usuarioComponent.html'
})

export class UsuarioComponent implements OnInit {

    msgTitulo: string;
    usuario: Usuario;
    //usuarios: any;
    usuarios: Array<Usuario>;
    showMsgError: boolean;
    msgError: string;
    mostrarDetalle: boolean;


    constructor(private usuarioService: UsuarioService, 
        private activatedRoute: ActivatedRoute, private router: Router){

        this.msgTitulo = "Usuarios.";

        this.obtener();
    }

    //Hook es un evento que sucede durante el ciclo de vida de un componente.
    //Función o método que es invocado una vez que el componente ha sido inicializado.
    ngOnInit(){
        console.log("El componente UsuarioComponent ha sido inicializado...");  
        
        let id: number;

        //Para recibir parametros por URL.
        this.activatedRoute.params.forEach((params: Params) => {
            id = params["id"];
            
            console.log(`Se recibio el parametro [id - ${id}].`);

            this.obtenerPorId(id);
        });

    }

    obtener(){
        
        this.mostrarDetalle = false;
        
        console.log("Obteniendo la lista de usuarios...");

        this.usuarioService.obtener().subscribe(
            usuariosFromService => {
                this.usuarios = usuariosFromService; 
                console.log(`Se obtuvieron [${this.usuarios}] usuarios.`);
            },
            (err: HttpErrorResponse) => {
                this.showMsgError = true;
                this.msgError = this.usuarioService.handlerError(err);
            }
        );
    }

    /**
     * Función a través de la cual se consume la función observable suscribiendose a ella para obtener 
     * la instancia de la interfaz Usuario..
     * 
     * @param id 
     */
    obtenerPorId(id: number){
        console.log(`Obteniendo el usuario a través de su ID [${id}]...`);

        this.usuarioService.obtenerPorId(id).subscribe(
            userFromService => {
                this.mostrarDetalle = true;
                this.usuario = userFromService;
                console.log(`Se obtuvo el usuario [${this.usuario}] con ID [${id}].`);
            },
            (err: HttpErrorResponse) => {
                this.showMsgError = true;
                this.msgError = this.usuarioService.handlerError(err);
            }
        );
    }

    verDetalle(id: number){

        /**En este caso la URL se encuentra definida en el archivo app.routing.module.ts
         * y corresponde a la URL a través de la cual se obtiene el usuario de acuerdo al ID
         * Es decir, se le esta pasando un parámetro a este componente a través de la URL.
        */
        this.router.navigate(["/usuarios/", id]);
    }

    regresar(){
        this.mostrarDetalle = false;
        this.router.navigate(["/usuarios"]);
    }
}