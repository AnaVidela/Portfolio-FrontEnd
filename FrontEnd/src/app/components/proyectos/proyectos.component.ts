import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/clases/proyectos';
import { ProyService } from 'src/app/service/proy.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
proyectosList:Proyectos[]=[];

constructor(private datosPortfolio: ProyService){}

  ngOnInit(): void {
      this.cargarProyectos();
  }

  cargarProyectos():void {
    this.datosPortfolio.listaproy().subscribe(data=>{
      this.proyectosList=data; 
    })
  }


  borrar(id?: number): void{
    this.datosPortfolio.borrarProy(Number(id)).subscribe(data => {
      alert("Se borrará el elemento")
      this.cargarProyectos();
    })
  }

}
