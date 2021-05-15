
export class Producto {
    id: number;
    nombre: string;
    marca: string;
    precio: number;
    categoria: string;
    status: boolean;

    constructor(id: number, nombre: string, marca: string, precio: number,  
        categoria: string, status: boolean) {

        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.categoria = categoria;
        this.status = status;
    }
}