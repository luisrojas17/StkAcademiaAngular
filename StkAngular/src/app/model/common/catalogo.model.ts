export class Catalogo {

    id: number;
    descripcion: string;

    constructor(id: number, descripcion: string){
        this.id = id;
        this.descripcion = descripcion
    }

    /*get id(): number {
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(descripcion: string) {
        this._descripcion = descripcion;
    }*/
}