import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/clases/persona';
import { PortFolioService } from 'src/app/service/port-folio.service';

@Component({
  selector: 'app-form.edit.persona',
  templateUrl: './form.edit.persona.component.html',
  styleUrls: ['./form.edit.persona.component.css']
})
export class FormEditPersonaComponent implements OnInit {
  guardar: FormGroup;
  link: string ='';
  img: string = '';
  nombre: string = '';
  descripcion: string = '';
  per: Persona = new Persona(this.link,this.img,this.nombre,this.descripcion);

  constructor(private formBuilder: FormBuilder,
    private perService: PortFolioService,
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
    this.perService.detallePersona(id).subscribe(data=>{
      this.per=data;
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

    const per = new Persona(this.link, this.img, this.nombre, this.descripcion);
    const id= this.activateRoute.snapshot.params['id'];
    this.perService.editPersona(id,per).subscribe(data =>{
      this.router.navigate(['']);
 
    })

  }

}

