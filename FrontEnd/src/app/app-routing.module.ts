import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormAgregarComponent } from './components/form-agregar/form-agregar.component';
import { FormEditarComponent } from './components/form-editar/form-editar.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormEditExpComponent } from './components/form.edit.exp/form.edit.exp.component';
import { FormEditPersonaComponent } from './components/form.edit.persona/form.edit.persona.component';
import { FormMasExpComponent } from './components/form.mas.exp/form.mas.exp.component';
import { FormMasProyComponent } from './components/form.mas.proy/form.mas.proy.component';
import { FormEditProyComponent } from './components/form.edit.proy/form.edit.proy.component';

const routes: Routes = [{path: "", component: PrincipalComponent},
{path:"login", component: FormLoginComponent},
{path:"register", component: FormRegisterComponent},
{path:"editar/:id", component: FormEditarComponent,},
{path:"agregar", component: FormAgregarComponent},
{path:"agregarexp",component: FormMasExpComponent},
{path:"agregarproy",component: FormMasProyComponent},
{path:"editarp/:id", component: FormEditPersonaComponent},
{path:"editarexp/:id", component: FormEditExpComponent},
{path:"editarproy/:id", component: FormEditProyComponent},
{path:"**", redirectTo: "", pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
