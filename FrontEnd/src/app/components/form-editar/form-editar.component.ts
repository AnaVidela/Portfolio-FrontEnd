import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent implements OnInit{
  guardar: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.guardar= this.formBuilder.group({
      url: ['',[Validators.required, Validators.minLength(5)]],
      titulo: ['',[Validators.required, Validators.minLength(5)]],
      descripcion: ['',[Validators.required,Validators.minLength(5)]]
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  gOnInit(): void {}

  get Url(){
    return this.guardar.get("url");
  }

  get Titulo(){
    return this.guardar.get("titulo");
  }

  get Descripcion(){
    return this.guardar.get("descripcion");
  }

  get UrlValid(){
    return this.Url?.touched && !this.Url?.valid;
  }

  get TituloValid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  onGuardar(event: Event) {
    event.preventDefault;
    if (this.guardar.valid){
      alert("Todo correcto ¡Enviar formulario!");
      this.guardar.reset();
    }else {
      this.guardar.markAllAsTouched();
    }
  }

}
