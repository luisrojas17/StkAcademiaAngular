import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

//Componentes de la aplicación.
import { Producto } from '../../model/productos/producto.model';
import { ProductoMetadata } from '../../model/productos/productoMetadata.model';
import { ProductoService } from '../../servicios/productos/producto.service';

@Component({
    selector: 'productos',
    templateUrl: './productoComponent.html',
    providers: [ProductoService]
})

export class ProductoComponent implements OnInit {
    msgTitulo: string;
    productos: any; 
    
    editarProducto: boolean;
    productoAEditar: ProductoMetadata;

    //productos: Observable<any[]>;

    //Se pueden declarar paramentros opcionales en el constructor de la siguiente manera:
    //constructor(parametroOpcional?: string, parametroOpcional: string){}
    constructor(private productoService: ProductoService, private firestore: AngularFirestore){
        this.msgTitulo = "Productos.";

        this.editarProducto = false;
        this.productoAEditar = {
            id: "",
            nombre: "",
            marca: "",
            precio: ""
        }

        this.obtener();
    }

    //Función o método que es invocado una vez que el componente ha sido inicializado.
    ngOnInit() {
        console.log("El componente ProductoComponent ha sido inicializado...");
        
    }

    actualizar(){

        this.productoService.actualizar(this.productoAEditar);

        this.editarProducto = false;
    }

    cancelarActualizacion(){

        this.productoAEditar = {
            id: "",
            nombre: "",
            marca: "",
            precio: ""
        }

        this.editarProducto = false;
    }

    editar(producto: ProductoMetadata){
        //Asignamos los datos del producto que se encuentra en la lista al producto que será eliminado.
        this.productoAEditar = producto;
        this.editarProducto = true;
    }

    eliminar(producto: ProductoMetadata){

        this.productoService.eliminar(producto.id);
    }

    obtener(){
        //this.productos = this.firestore.collection('productos').valueChanges();
        //console.log("Productos desde firebase: " + this.productos);

        //Se carga la lista de productos.
        this.productoService.obtener().subscribe(
            data => {
                this.productos = data;
            },
            err => {
                console.error("Ocurrio un error al obtener la lista de productos.", err);
            }
            
        );
    }

}