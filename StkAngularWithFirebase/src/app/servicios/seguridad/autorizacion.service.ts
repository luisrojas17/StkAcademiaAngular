import { Injectable } from '@angular/core';
import { CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router } from '@angular/router';

import { AutenticacionService } from './autenticacion.service';

@Injectable({
    providedIn: 'root'
})

export class AutorizacionService implements CanActivate {

    constructor(private autenticacionService :AutenticacionService, 
        private router: Router){

    }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        console.log("Comprobando si el usuario se encuentra autenticado...");
        
        //true =  si el usuario esta loggeado y false en caso contrario.
        let isPermited: boolean = this.autenticacionService.isLogged();
        
        //state.url = "";

        return isPermited;
    }
}