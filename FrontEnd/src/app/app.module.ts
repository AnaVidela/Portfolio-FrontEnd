import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import {HttpClientModule} from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { PrincipalComponent } from './components/principal/principal.component';
import { ButtonComponent } from './components/button/button.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component'

const appRoutes: Routes = [
  {path: "", component: PrincipalComponent},
  {path:"login", component: FormLoginComponent},
  {path:"register", component: FormRegisterComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PrincipalComponent,
    ButtonComponent,
    FormLoginComponent,
    FormRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
