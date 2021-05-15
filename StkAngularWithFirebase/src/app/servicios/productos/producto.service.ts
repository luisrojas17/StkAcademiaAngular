import { Injectable } from '@angular/core';
//La dependencia angularfire2/firestore es depreciada y en su lugar se debe usar la dependencia @angular/fire/firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Producto } from '../../model/productos/producto.model';
import { ProductoMetadata } from '../../model/productos/productoMetadata.model';

@Injectable({
    providedIn: 'root'
})

export class ProductoService {

    //Se utiliza para obtener una colección de documentos (registros) de la base de datos.
    //private productosCollection: AngularFirestoreCollection<Producto>;
    private afsc: AngularFirestoreCollection<Producto>;
    productos: Observable<ProductoMetadata[]>;    

    //Se utiliza para eliminar un documento (registro) en la base de datos.
    private afsd: AngularFirestoreDocument<Producto>;

    constructor(private afs: AngularFirestore){
        
        //Obtenemos la colección (tabla) productos, la cual se encuentra en la base de datos.
        this.afsc = afs.collection<Producto>("productos");
        
    }

    public actualizar(producto: ProductoMetadata){
        console.log(`Actualizando el producto con ID [${producto.id}]...`);

        this.afsd = this.afs.doc<ProductoMetadata>(`productos/${producto.id}`);
        this.afsd.update(producto);

        console.log(`Se actualizo el producto con ID [${producto.id}].`);
    }

    public guardar(producto: Producto){

        this.afsc.add(producto);

        console.log(`Se agrego el producto [${producto}] exitosamente.`);
    }

    public eliminar(id: string){

        console.log(`Eliminando el producto con ID [${id}]...`);

        //productos/${id} indica que en la colección productos busque el elemento con el id
        this.afsd = this.afs.doc<ProductoMetadata>(`productos/${id}`);
        //Se indica que se debe eliminar el elemento.
        this.afsd.delete();
    
        console.log(`Se elimino el producto con ID [${id}] exitosamente.`);
    }

    public obtener(): Observable<ProductoMetadata[]>{

        console.log(`Obteniendo la lista de productos desde firebase...`);
        //Obtenemos los valores de la colección (tabla) de productos desde la base de datos 
        //de Firebase. valueChanges escucha en la base de datos cuando se realiza un cambio,
        //el cual es notificado através del servicio AngularFirestore.
        //El metodo valueChanges no incluye los metadatos del documento (registro)
        //this.productos = this.productosCollection.valueChanges();

        //Use snapshotChanges para obtener metadatos del documento (registro) en la collección (tabla) de la base de datos.
        //Los metadatos son ID de cada documento en la base o bien, así como el indice del documento.
        this.productos = this.afsc.snapshotChanges().pipe(
            map(actions => actions.map(p => {
                const data = p.payload.doc.data() as ProductoMetadata;
                data.id = p.payload.doc.id;
                //const id = p.payload.doc.id;
                //return { id, ...data };
                return { ...data }
              }))
        );

        console.log(`Se obtuvieron los productos [${this.productos}] desde firebase.`);

        return this.productos;
        
    }
}