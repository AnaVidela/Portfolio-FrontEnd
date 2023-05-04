import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/clases/experiencia';
import { EsxpService } from 'src/app/service/esxp.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaList: Experiencia[]=[];
  
  constructor(private datosPortFolio: EsxpService){}


  ngOnInit(): void {
    this.datosPortFolio.listaexp().subscribe(data=> {
      this.experienciaList= data
    })
  }

}
