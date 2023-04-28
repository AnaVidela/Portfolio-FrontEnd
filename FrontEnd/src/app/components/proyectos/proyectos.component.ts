import { Component, OnInit } from '@angular/core';
import { PortFolioService } from 'src/app/service/port-folio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
proyectosList:any;

constructor(private datosPortfolio: PortFolioService){}

  ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data=>{
        this.proyectosList=data.proyectos;
      })
  }

}
