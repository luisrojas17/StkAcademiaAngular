import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

//Componentes de la aplicación.
import { CatalogoService } from '../../servicios/common/catalogo.service';
import { ProductoService } from '../../servicios/productos/producto.service';
import { Producto } from '../../model/productos/producto.model';

@Component({
    selector: 'detalleProducto',
    templateUrl: './detalleProductoComponent.html'
})

export class DetalleProductoComponent {
    //Se indica que el valor de la variable nombreProducto puede ser recibido de un componente padre.
    @Input() nombreProducto: string;
    private _idCategoria: number;
    productos: Array<Producto>;
    nuevoProducto: Producto; 
    agregarProducto: boolean;

    //Propiedades a enviar al componente padre.
    nombre: string;
    precio: number;
    marca: string;
    status: boolean;
    categoria: string;

    //Para pasar datos del componente hijo al componente padre.
    @Output() notificarEvento = new EventEmitter<any>();

    constructor(private catalogoService: CatalogoService, 
        private prodcutoService: ProductoService){
        
        this.agregarProducto = false;

        this.nombreProducto = "";

        //Se inicializan propiedades a enviar al componente padre.
        this.nombre = "Licuadora";
        this.precio = 500;
        this.marca = "Oster";
        this.status = true;
        this.categoria = "Electrodómestico";

    }

    //ngOnChanges(changes: SimpleChanges) {
        //Action for change
        //this.nombreProducto = changes.nombreProducto.currentValue;
        //console.log(changes.nombreProducto.currentValue);
      // You can also use categoryId.previousValue and 
      // categoryId.firstChange for comparing old and new values
    //}

    agregar(){
        
        this.nuevoProducto = new Producto(this.prodcutoService.obtenerId(), 
            "", "", 0, 
            this.catalogoService.obtenerDescripcion(this.idCategoria), false);

        this.agregarProducto = true;
    }

    guardar(){
        
        this.prodcutoService.guardar(this.nuevoProducto);

        this.agregarProducto = false;

    }

    eliminar(producto: Producto){

        this.prodcutoService.eliminar(producto.id);

    }

    /**
     * Envía una evento al elemento padre para notificar que hubo cambios en los valores.
     * 
     * @param event 
     */
    notificarAlcomponentePadre(event: Event){
        
        this.notificarEvento.emit({
            nombre: this.nombre,
            precio: this.precio,
            marca: this.marca,
            status: this.status,
            categoria: this.categoria
        });   
        
        console.log(`Notificando el evento con los datos [${event}] al componente padre...`);

    }

    mostrarCategoriaSeleccionada(): boolean {

        let estado: boolean = false;
        
        if(this.idCategoria > 0){
            this.productos = this.prodcutoService.obtener(this.idCategoria);    
            estado = true;

        } 
          
        console.log(`Se selecciono una catagoria [${estado}]? - ${this.idCategoria}`);

        return estado;
    }

    mostrarDetalleDeProductos(): boolean {

        let existenProductos: boolean = false;

        this.productos = this.prodcutoService.obtener(this.idCategoria);

        if(this.productos != null && this.productos.length > 0){
            existenProductos = true;
        }

        return existenProductos;
    }

    //Metodos accesores para la propiedad _idCategoria
    get idCategoria(): number {
        return this._idCategoria;
    }

    //Se indica que el valor de la variable _idCategoria puede ser recibido de un componente padre.
    @Input()
    set idCategoria(idCategoria: number) {
        this._idCategoria = idCategoria;
        
        console.log(`La categoria seleccionada fue [${this._idCategoria}].`);
    }

}