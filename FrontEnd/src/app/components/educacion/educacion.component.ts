import { Component, OnInit } from '@angular/core';
import { PortFolioService } from 'src/app/service/port-folio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacionList:any;

  constructor(private datosPortFolio: PortFolioService){}

  ngOnInit(): void {
    this.datosPortFolio.obtenerDatos().subscribe(data =>{
      this.educacionList= data.educacion;
    })
  }

  
}
