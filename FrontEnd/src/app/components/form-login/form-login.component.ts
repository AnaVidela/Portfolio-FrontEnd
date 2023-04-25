import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent  implements OnInit{
form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      password: ['',[Validators.required, Validators.minLength(8)]],
      email: ['',[Validators.required, Validators.email]],
    })
  }

ngOnInit(): void {}

get Password(){
  return this.form.get("password");
}

get Mail() {
  return this.form.get("email");
}

get PasswordValid(){
  return this.Password?.touched && !this.Password?.valid;
}

get MailValid(){
  return false;
}

onEnviar(event: Event) {
  event.preventDefault;
  if (this.form.valid){
    alert("Todo correcto ¡Enviar formulario!");
  }else {
    this.form.markAllAsTouched();
  }
}
} 