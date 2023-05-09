import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/clases/experiencia';
import { ExpService } from 'src/app/service/exp.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaList: Experiencia[]=[];
  
  constructor(private datosPortFolio: ExpService){}


  ngOnInit(): void {
    this.cargarExp();
  }

  cargarExp(): void {
    this.datosPortFolio.listaexp().subscribe(data=> {
      this.experienciaList= data
    })
  }

  borrar(id?:number): void{
    this.datosPortFolio.borrarExperiencia(Number(id)).subscribe(data => {
      alert("se borrara el elemento")
      this.cargarExp();
    })
  }

}
