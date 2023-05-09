import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/clases/experiencia';
import { ExpService } from 'src/app/service/exp.service';

@Component({
  selector: 'app-form.edit.exp',
  templateUrl: './form.edit.exp.component.html',
  styleUrls: ['./form.edit.exp.component.css']
})
export class FormEditExpComponent implements OnInit {
  guardar: FormGroup;
  link: string ='';
  img: string = '';
  nombre: string = '';
  descripcion: string = '';
  exp: Experiencia = new Experiencia(this.link,this.img,this.nombre,this.descripcion);

  constructor(private formBuilder: FormBuilder,
    private expService: ExpService,
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
    this.expService.detalleExperiencia(id).subscribe(data=>{
      this.exp=data;
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

    const exp = new Experiencia(this.link, this.img, this.nombre, this.descripcion);
    const id= this.activateRoute.snapshot.params['id'];
    this.expService.editExperiencia(id,exp).subscribe(data =>{
      this.router.navigate(['']);
       
    })

  }

}


