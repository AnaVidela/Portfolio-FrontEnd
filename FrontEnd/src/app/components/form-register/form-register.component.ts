import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/clases/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{

  register: FormGroup;

  isRegister = false;
  isRegisterFail = false;
  nuevoUsuario!: NuevoUsuario;
  nombre!:string;
  nombreUsuario!:string;
  email!: string;
  password!: string;
  errMsj!: string;
  isLogged = false;

  constructor(private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router)
    {
    this.register=this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.minLength(3)]],
      nombreUsuario: ['',[Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {   
    
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
  }

  onRegister(): void{
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe (data => {
      this.isRegister = true;
      this.isRegisterFail= false;
      alert("Cuenta creada")
      this.router.navigate(['login'])
    }, err => {
      this.isRegister = false;
      this.isRegisterFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
      alert("Ingrese datos al formulario")
    });
      
    }


  get Nombre(){
    return this.register.get("nombre");
  }

  get NombreUsuario() {
    return this.register.get("nombreUsuario");
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

  
}
