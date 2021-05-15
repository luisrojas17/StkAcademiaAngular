import { Component } from '@angular/core';
import { Producto } from 'src/app/model/productos/producto.model';
import { ProductoService } from 'src/app/servicios/productos/producto.service';

@Component({
    selector: "addProducto",
    templateUrl: 'addProductoComponent.html'
})

export class AddProductoComponent {
    msgTitulo: string;
    producto: Producto;

    constructor(private productoService: ProductoService){
        this.msgTitulo = "Agregar producto.";

        //Inicializamos el producto.
        this.producto = {
            nombre: "",
            marca: "",
            precio: ""
        }
    }

    agregar(){
        this.productoService.guardar(this.producto);

        this.limpiar();
    }

    limpiar(){
        this.producto.nombre = "";
        this.producto.marca = "";
        this.producto.precio = "";
    }
}