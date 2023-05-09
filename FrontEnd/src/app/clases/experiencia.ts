export class Experiencia {
    id?:number;
    link: string;
    img: string;
    nombre: string;
    descripcion: string;

    constructor(link: string, img: string, nombre: string,descripcion: string){
        this.link = link;
        this.img=img;
        this.nombre=nombre;
        this.descripcion=descripcion;
    }

}
