import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
//import { retry } from 'rxjs/operators';

import { Usuario } from 'src/app/modules/usuarios/model/usuario.model';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    baseUrl: string;

    constructor(private httpClient: HttpClient){
        this.baseUrl = environment.jsonPlaceHolderApiUrl + "users/";
    }

    public obtener(): Observable<Array<Usuario>> {
    //public obtener(): any {
        /**
         * responseType indica el formato esperado de la respuesta.
         * - arraybuffer
         * - blob
         * - json (Por default, la respuesta es de tipo JSON).
         * - text
         * 
         * data = se usa cuando la petición devuelve datos. data es del tipo HttpResponse<Object>
         * err = se usa para procesar la respuesta de error. err es del tipo HttpErrorResponse
         * () = se usa para procesar la respuesta de datos satisfactoria. Es una función callback que se ejecutará
         * cuando la petición haya terminado con exito.
         * 
         */
        /*let usuarios: any;
        this.httpClient.get("https://jsonplaceholder.typicode.com/users", {responseType: 'json'}).subscribe(
            response => {
                console.log(`La respuesta del servicio fue [${response}]`);
                usuarios = response;
            },    
            (err: HttpErrorResponse) => {
                this.handlerError(err);
            },
            () => {
                console.log(`Petición finalizada con exito.`);
            }
        );

        return usuarios;*/
        return this.httpClient.get<Array<Usuario>>(this.baseUrl, {responseType: 'json'});
    }

    /**
     * Función de tipo observable utilizada para publicar un servicio a través del cual se obtiene
     * un Usuario de acuerdo a si ID. Este metodo será ejecutado hasta que un consumidor se suscriba 
     * a ella. 
     * 
     * @param id 
     * @returns devuelve una instancia de la interface Usuario, la cual es observable.
     */
    public obtenerPorId(id: number): Observable<Usuario> {
        const url  = this.baseUrl + id;
        return this.httpClient.get<Usuario>(url, {responseType: 'json'});
    }

    public handlerError(httpErrorResponse: HttpErrorResponse): string {

        let message: string;

        if(httpErrorResponse.error instanceof ErrorEvent){
            //Se procesa el detalle del error que se obtuvo del lado del cliente.
            console.error("Ocurrio un ErrorEvent: ", httpErrorResponse.error.message);
            message = httpErrorResponse.error.message;
        } else {
            //Se procesa el detalle del error que se obtuvo del lado del server.
            //Procesar las propiedades status y message para dar detalle al cliente acerca del error.
            let detailError: Array<String>;
            detailError = [httpErrorResponse.error, httpErrorResponse.headers, httpErrorResponse.message, 
                httpErrorResponse.name, httpErrorResponse.ok, httpErrorResponse.status, httpErrorResponse.statusText];

            console.error(`Ocurrio el error [${detailError}].`);
            message = httpErrorResponse.message;
        }

        //return throwError("Intente más tarde.");
        return message;
    }
}