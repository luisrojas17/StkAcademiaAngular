import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto/contacto.model';

@Component({
    selector: 'contacto',
    templateUrl: './contactoComponent.html'
})

export class ContactoComponent implements OnInit {

    msgTitulo: string;
    comentarios: string
    contacto: Contacto;

    constructor(){
        this.msgTitulo = "Contacto.";

        this.contacto = new Contacto("amarillo17cyl@gmail.com", "55 55 55 55 55");
    }

    //Hook es un evento que sucede durante el ciclo de vida de un componente.
    //Función o método que es invocado una vez que el componente ha sido inicializado.
    ngOnInit(){
        console.log("El componente ContactoComponent ha sido inicializado...");    
    }

    emviarComentarios(){

        console.log(`Enviando comentarios [${this.comentarios}] al contacto [${this.contacto}].`);

        this.comentarios = '';
    }
}