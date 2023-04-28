import { Component, OnInit } from '@angular/core';
import { PortFolioService } from 'src/app/service/port-folio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaList: any;
  
  constructor(private datosPortFolio: PortFolioService){}


  ngOnInit(): void {
    this.datosPortFolio.obtenerDatos().subscribe(data=> {
      this.experienciaList= data.experiencia
    })
  }

}
