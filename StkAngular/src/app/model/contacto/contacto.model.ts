export class Contacto {
    //En una propiedad readonly solo se puede asignar el valor cuando es definida 
    //o bien en el constructor
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