import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaModulosComponent } from './lista-modulos/lista-modulos.component';

const routes: Routes = [
  {path: 'numbers', loadChildren: './numbers/numbers.module#NumbersModule'},
  {path: 'listadoModulos', component: ListaModulosComponent},
  {path: '', redirectTo:'listadoModulos', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
