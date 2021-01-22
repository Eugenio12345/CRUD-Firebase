import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {MostrarUsuariosComponent} from './components/mostrar-usuarios/mostrar-usuarios.component';
import {CrearRegistroComponent} from './components/crear-registro/crear-registro.component';


const routes: Routes = [
  {path : 'login', component: LoginComponent },
  {path : 'mostrar-usuarios', component: MostrarUsuariosComponent },
  {path : 'crear-registro', component: CrearRegistroComponent },
  {path : '', redirectTo: '/login', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
