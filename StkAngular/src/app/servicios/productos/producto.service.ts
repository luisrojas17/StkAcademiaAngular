import { Injectable } from '@angular/core';

import { CatalogoService } from '../common/catalogo.service';
import { Producto } from '../../model/productos/producto.model';

@Injectable({
    providedIn: 'root'
})

export class ProductoService {
    productos: Array<Producto>;
    productosAMostrar: Array<Producto>;

    constructor(private catalogoService: CatalogoService){
        this.productos = [
            new Producto(1, "Auto stereo", "Sony", 1000, "Electrónica", true),
            new Producto(2, "Convertidores HDMI a VGA", "Steren", 543, "Electrónica", false),
            new Producto(3, "Home theater", "JVC", 4330, "Electrónica", true),
            new Producto(4, "Video grabadora", "LG", 18999, "Electrónica", false),
            new Producto(5, "Smart TV", "Samsung", 9999, "Electrónica", true)
        ];
    }

    public guardar(producto: Producto){

        this.productos.push(producto);
        this.productosAMostrar.push(producto);

        console.log(`Se agrego el producto con ID [${producto.id}] exitosamente.`);
    }

    public eliminar(idProducto: number){

        console.log(`Eliminando el producto con ID [${idProducto}]...`);

        let index: number = this.productos.findIndex(p => p.id == idProducto);

        if(index > -1){
            //Se indica el indice desde donde se desea elimine y la cantidad de valores a eliminar.
            //E metodo splice afecta el arreglo original y devuelve en un arreglo los elementos que fueron eliminados.
            this.productos.splice(index, 1);
        }
    
        index = this.productosAMostrar.findIndex(p => p.id == idProducto);

        if(index > -1){
            this.productosAMostrar.splice(index, 1);
        }
    
        console.log(`Se elimino el producto con ID [${idProducto}] exitosamente.`);
    }

    public obtenerId(): number {
        return this.productos.length + 1;
    }

    public obtener(idCategoria: number){

        console.log(`Obteniendo los productos para la categoria [${idCategoria}]...`);

        let descripcionCategoria: string = this.catalogoService.obtenerDescripcion(idCategoria);

        this.productosAMostrar = [];

        for(let p of this.productos){

            if(p.categoria == descripcionCategoria){
                this.productosAMostrar.push(p);
            }
        }

        console.log(`Se obtuvieron [${this.productosAMostrar.length}] productos para la categoria [${idCategoria}].`);
        
        return this.productosAMostrar;
    }
}