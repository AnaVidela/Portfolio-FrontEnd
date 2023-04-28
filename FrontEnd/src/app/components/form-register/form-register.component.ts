import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{
  register: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.register=this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(1)]],
      apellido: ['',[Validators.required,Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {    
  }
  get Name(){
    return this.register.get("name");
  }

  get Apellido() {
    return this.register.get("apellido");
  }

  get Password(){
    return this.register.get("password");
  }
  
  get Mail() {
    return this.register.get("email");
  }
  
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  
  get MailValid(){
    return false;
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.register.valid){
      alert("Todo correcto ¡Enviar formulario!");
      this.register.reset();
    }else {
      this.register.markAllAsTouched();
    }
  }
}
