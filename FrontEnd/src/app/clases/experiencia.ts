export class Experiencia {
    id?:number;
    img: string;
    nombre: string;
    descripcion: string;

    constructor(img: string, nombre: string,descripcion: string){
        this.img=img;
        this.nombre=nombre;
        this.descripcion=descripcion;
    }

}