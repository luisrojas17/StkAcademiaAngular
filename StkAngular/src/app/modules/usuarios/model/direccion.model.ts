import { GeoLocalizacion }  from './geoLocalizacion.model';

export interface Direccion {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocalizacion;
}