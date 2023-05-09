import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ButtonComponent } from './components/button/button.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormEditarComponent } from './components/form-editar/form-editar.component';

import { NgChartsModule } from 'ng2-charts';
import { ButtonTrashComponent } from './components/button-trash/button-trash.component';
import { ButtonPencilComponent } from './components/button-pencil/button-pencil.component';
import { FormAgregarComponent } from './components/form-agregar/form-agregar.component';
import { FormEditPersonaComponent } from './components/form.edit.persona/form.edit.persona.component';
import { interceptorProvide } from './service/interceptor.service';
import { ButtonPlusComponent } from './components/button-plus/button-plus.component';
import { FormMasExpComponent } from './components/form.mas.exp/form.mas.exp.component';
import { FormEditExpComponent } from './components/form.edit.exp/form.edit.exp.component';



const appRoutes: Routes =[
{path: "", component: PrincipalComponent},
{path:"login", component: FormLoginComponent},
{path:"register", component: FormRegisterComponent},
{path:"editar/:id", component: FormEditarComponent,},
{path:"agregar", component: FormAgregarComponent},
{path:"editarp/:id", component: FormEditPersonaComponent},
{path:"editarexp/:id", component: FormEditExpComponent},
{path:"agregarexp",component: FormMasExpComponent},
{path:"**", redirectTo: "", pathMatch:'full'}
]

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
    FormRegisterComponent,
    FormEditarComponent,
    ButtonTrashComponent,
    ButtonPencilComponent,
    FormAgregarComponent,
    FormEditPersonaComponent,
    ButtonPlusComponent,
    FormMasExpComponent,
    FormEditExpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true} ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [interceptorProvide],
  bootstrap: [AppComponent]
})
export class AppModule { }
