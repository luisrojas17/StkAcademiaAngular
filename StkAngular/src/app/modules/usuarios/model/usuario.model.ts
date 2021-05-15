import { Direccion } from "./direccion.model";

export interface Usuario {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Direccion;
    phone: string;
    website: string;
}