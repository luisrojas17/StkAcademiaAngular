import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

//Componentes de la aplicación.
import { Catalogo } from '../../model/common/catalogo.model';
import { CatalogoService } from '../../servicios/common/catalogo.service';

@Component({
    selector: 'productos',
    templateUrl: './productoComponent.html',
    providers: [CatalogoService]
})

export class ProductoComponent implements OnInit {
    msgTitulo: string;
    nombreProducto: string;
    idCategoria: number;
    categorias: Array<Catalogo>;

    //Detalle del producto enviado desde el componente hijo
    producto = {
        nombre: '',
        precio: '',
        marca: '',
        status: '',
        categoria: ''
    }

    //Se pueden declarar paramentros opcionales en el constructor de la siguiente manera:
    //constructor(parametroOpcional?: string, parametroOpcional: string){}
    constructor(private catalogoService: CatalogoService){
        this.msgTitulo = "Productos.";
    }

    //Función o método que es invocado una vez que el componente ha sido inicializado.
    ngOnInit() {
        console.log("El componente ProductoComponent ha sido inicializado...");
        this.nombreProducto = "";        
        this.idCategoria = 0;
        this.categorias = this.catalogoService.obtenerCategoriasDeProductos();
    }

    onChange(UpdatedValue : string) :void { 
        this.nombreProducto = UpdatedValue; 
    } 

    //recibirNotificacionDelComponenteHijo(event: Event){
        //console.log(`Se obtuvo el evento [${event}] del componente hijo.`);
    recibirNotificacionDelComponenteHijo(data: any){
        
        this.producto = data;
        
        console.log(`Se obtuvo el evento con los datos [${this.producto.nombre}, ${this.producto.marca}, ${this.producto.precio}, ${this.producto.categoria}, ${this.producto.status}] desde el componente hijo.`);
    }
}