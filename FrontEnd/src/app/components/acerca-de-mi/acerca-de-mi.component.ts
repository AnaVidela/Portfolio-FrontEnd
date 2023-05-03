import { Component, OnInit } from '@angular/core';
import { PortFolioService } from 'src/app/service/port-folio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit{
  
  personaList:any; 
  
  constructor(private datosPortFolio:PortFolioService) {}

  ngOnInit(): void {
    this.datosPortFolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.personaList=data.persona;
    });
  }

  
}
