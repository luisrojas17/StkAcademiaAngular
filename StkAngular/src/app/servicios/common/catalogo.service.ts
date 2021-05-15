import { Injectable } from '@angular/core';

import { Catalogo } from '../../model/common/catalogo.model';

@Injectable({
    providedIn: 'root'
})

export class CatalogoService {

    categorias = new Array();

    constructor(){

        this.categorias = [
            new Catalogo(0, "Seleccione una categoría de producto"),
            new Catalogo(1, "Electrodómesticos"),
            new Catalogo(2, "Electrónica"),
            new Catalogo(3, "Linea Blanca"),
            new Catalogo(4, "Video Juegos"),
            new Catalogo(5, "Otros")
        ];
    }

    public obtenerCategoriasDeProductos(): Array<Catalogo> {
        console.log("Obteniendo las categorias de productos...");
        
        console.log(`Se obtuvieron [${this.categorias.length}] categorias.`);

        return this.categorias;
    }

    public obtenerDescripcion(idCatalogo: number): string {

        console.log(`Obteniendo la descripción del catálogo con id [${idCatalogo}]...`);

        let catalogo: Catalogo = this.categorias.find(p => p.id == idCatalogo);
        let descripcion: string = catalogo.descripcion;

        console.log(`Se obtuvo la descripción [${descripcion}] para el id de catálogo [${idCatalogo}].`);

        return descripcion;
    }
}