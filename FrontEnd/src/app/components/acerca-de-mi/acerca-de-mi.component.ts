import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { PortFolioService } from 'src/app/service/port-folio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit{
  
  personaList:Persona[]=[]; 
  
  constructor(private datosPersona:PortFolioService) {}

  ngOnInit(): void {
    this.datosPersona.listaPersona().subscribe(data =>{
      console.log(data);
      this.personaList=data;
    });
  }

  
  
}
