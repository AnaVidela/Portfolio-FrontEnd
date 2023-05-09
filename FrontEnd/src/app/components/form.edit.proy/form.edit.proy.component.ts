import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/clases/proyectos';
import { ProyService } from 'src/app/service/proy.service';

@Component({
  selector: 'app-form.edit.proy',
  templateUrl: './form.edit.proy.component.html',
  styleUrls: ['./form.edit.proy.component.css']
})
export class FormEditProyComponent implements OnInit {
  guardar: FormGroup;
  link: string ='';
  img: string = '';
  nombre: string = '';
  descripcion: string = '';
  proy: Proyectos = new Proyectos(this.link,this.img,this.nombre,this.descripcion);

  constructor(private formBuilder: FormBuilder,
    private proyService: ProyService,
    private activateRoute: ActivatedRoute,
    private router: Router) {
    this.guardar = this.formBuilder.group({
      link: ['', [Validators.required, Validators.minLength(5)]],
      url: ['', [Validators.required, Validators.minLength(5)]],
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit(): void {
    const id= this.activateRoute.snapshot.params['id'];
    this.proyService.detalleProy(id).subscribe(data=>{
      this.proy=data;
    })
  }

  get Link() {
    return this.guardar.get("link");
  }

  get Url() {
    return this.guardar.get("url");
  }

  get Titulo() {
    return this.guardar.get("titulo");
  }

  get Descripcion() {
    return this.guardar.get("descripcion");
  }

  get LinkValid() {
    return this.Link?.touched && !this.Link?.valid;
  }

  get UrlValid() {
    return this.Url?.touched && !this.Url?.valid;
  }

  get TituloValid() {
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get DescripcionValid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  onUpdate(): void {
    this.link = `${this.guardar.value.link}`;
    this.img = `${this.guardar.value.url}`;
    this.nombre = `${this.guardar.value.titulo}`;
    this.descripcion = `${this.guardar.value.descripcion}`;

    const proy = new Proyectos(this.link, this.img, this.nombre, this.descripcion);
    const id= this.activateRoute.snapshot.params['id'];
    this.proyService.editProy(id,proy).subscribe(data =>{
      this.router.navigate(['']);
 
    })

  }

}

