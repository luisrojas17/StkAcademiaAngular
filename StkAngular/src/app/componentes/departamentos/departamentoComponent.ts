import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'departamentos',
    templateUrl: './departamentoComponent.html'
})

export class DepartamentoComponent implements OnInit {

    msgTitulo: string;

    constructor(private httpClient: HttpClient){
        this.msgTitulo = "Departamentos.";

    }

    //Hook es un evento que sucede durante el ciclo de vida de un componente.
    //Función o método que es invocado una vez que el componente ha sido inicializado.
    ngOnInit(){
        console.log("El componente DepartamentoComponent ha sido inicializado...");    
    }
}