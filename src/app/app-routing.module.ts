import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent }, // Corregido de 'empleado' a 'empleados'
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  {path: 'actualizar-empleado/:id', component:ActualizarEmpleadoComponent},
  { path: '', redirectTo: 'empleados', pathMatch: 'full' }, // Redirección a empleados por defecto
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
