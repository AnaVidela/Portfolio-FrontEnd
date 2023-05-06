import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/clases/educacion';
import { EducService } from 'src/app/service/educ.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: Educacion[] = [];


  constructor(private datosPortFolio: EducService, private router: Router) { }

  ngOnInit(): void {
    this.cargarEduc();
  }

  cargarEduc(): void {
    this.datosPortFolio.listaeduc().subscribe(data => {
      this.educacionList = data;
    })
  }


  borrar(id?:number): void {
     //agregado
     alert("Se borrara el elemento selecionado");
    this.datosPortFolio.borrarEducacion(Number(id)).subscribe(data=>{
      this.cargarEduc();
    })
  }
}

