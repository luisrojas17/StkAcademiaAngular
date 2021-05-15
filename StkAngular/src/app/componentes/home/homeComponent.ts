import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './homeComponent.html'
})

export class HomeComponent implements OnInit {

    msgWelcome: string;

    constructor(){
        this.msgWelcome = "Bienvenido al sitio.";
    }

    //Hook es un evento que sucede durante el ciclo de vida de un componente.
    //Función o método que es invocado una vez que el componente ha sido inicializado.
    ngOnInit(){
        console.log("El componente HomeComponent ha sido inicializado...");    
    }
}