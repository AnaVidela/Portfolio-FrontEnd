import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginUsuario } from 'src/app/clases/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent  implements OnInit{
form: FormGroup;

isLogged = false;
isLogginFail = false;
loginUsuario!: LoginUsuario;
nombreUsuario!: string;
password!: string;
roles: string[] = [];
errMsj!: string;

 
  constructor(private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router)
    {
    this.form= this.formBuilder.group({
      password: ['',[Validators.required, Validators.minLength(4)]],
      nombreUsuario: ['',[Validators.required, Validators.minLength(4)]],
    })
  }

ngOnInit(): void {
     if(this.tokenService.getToken()){
    this.isLogged=true;
    this.isLogginFail=false;
    this.roles=this.tokenService.getAuthorities();
    
  }
}

onLogin(): void{
  this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
  this.authService.login(this.loginUsuario).subscribe (data => {
    this.isLogged = true;
    this.isLogginFail= false;
    this.tokenService.setToken(data.token);
    this.tokenService.setUserName(data.nombreUsuario);
    this.tokenService.setAuthorities(data.authorities);
    this.roles = data.authorities;
    this.router.navigate([''])
  }, err => {
    this.isLogged = false;
    this.isLogginFail = true;
    this.errMsj = err.error.mensaje;
    console.log(this.errMsj);
    alert("Usuario o contraseña incorrecta")
  });
    
  }


get Password(){
  return this.form.get("password");
}

get NombreUsuario() {
  return this.form.get("nombreUsuario");
}

get PasswordValid(){
  return this.Password?.touched && !this.Password?.valid;
}

get NombreUsuarioValid(){
  return false;
}


} 