import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuarios/usuario.model';
import { AutenticacionService } from 'src/app/servicios/seguridad/autenticacion.service';

@Component({
    selector: 'menu',
    templateUrl: './menuComponent.html'
})

export class MenuComponent {
    nombreAplicacion: string;
    
    usuario: Usuario;

    constructor(private autenticacionService: AutenticacionService){
        this.nombreAplicacion = "HomeShopSTK";
    }

    logout(){
        this.autenticacionService.logout();
        
        this.isLogged();
        //this.router.navigate(['/']);
    }

    isLogged(){
        this.usuario = this.autenticacionService.usuario;

        return this.autenticacionService.isLogged();
    }
}