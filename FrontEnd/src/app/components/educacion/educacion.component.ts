import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/clases/educacion';
import { EducService } from 'src/app/service/educ.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacionList:Educacion[]=[];

  constructor(private datosPortFolio: EducService){}

  ngOnInit(): void {
    this.datosPortFolio.listaeduc().subscribe(data =>{
      this.educacionList= data;
    })
  }

  
}
