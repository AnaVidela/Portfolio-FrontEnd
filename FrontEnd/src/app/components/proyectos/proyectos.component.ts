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
      this.datosPortfolio.listaproy().subscribe(data=>{
        this.proyectosList=data;
      })
  }

}
