import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/clases/proyectos';
import { ProyService } from 'src/app/service/proy.service';

@Component({
  selector: 'app-form.mas.proy',
  templateUrl: './form.mas.proy.component.html',
  styleUrls: ['./form.mas.proy.component.css']
})
export class FormMasProyComponent implements OnInit {
  crear: FormGroup;
  link: string = '';
  img: string = '';
  nombre: string = '';
  descripcion: string = '';

  constructor(private formBuilder: FormBuilder,
    private proyService: ProyService,
    private router: Router) {
    this.crear = this.formBuilder.group({
      link: ['', [Validators.required, Validators.minLength(5)]],
      url: ['', [Validators.required, Validators.minLength(5)]],
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit(): void {

  }

  get Link() {
    return this.crear.get("link");
  }

  get Url() {
    return this.crear.get("url");
  }

  get Titulo() {
    return this.crear.get("titulo");
  }

  get Descripcion() {
    return this.crear.get("descripcion");
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

  onCreate(): void {
    this.link = `${this.crear.value.link}`;
    this.img = `${this.crear.value.url}`;
    this.nombre = `${this.crear.value.titulo}`;
    this.descripcion = `${this.crear.value.descripcion}`;
    const proy = new Proyectos(this.link, this.img, this.nombre, this.descripcion);
    
    alert("Se va a crear un nuevo registro")
    this.proyService.agregarProy(proy).subscribe(data => {
      this.router.navigate(['']); 
    });
  }

}

