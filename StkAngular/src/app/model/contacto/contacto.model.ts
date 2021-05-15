export class Contacto {
    readonly email: string;
    readonly telefono: string;

    constructor(email: string, telefono: string){
        this.email = email;
        this.telefono = telefono;
    }

    public toString = () : string => {
        return `Contacto [email: ${this.email}, telefono: ${this.telefono}]`;
    }
}