import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaModulosComponent } from './components/lista-modulos/lista-modulos.component';
import { ErrorsComponent } from './components/errors/errors.component';

const routes: Routes = [
  {path: 'numbers', loadChildren: './numbers/numbers.module#NumbersModule'},
  {path: 'listadoModulos', component: ListaModulosComponent},
  {path: '', redirectTo:'listadoModulos', pathMatch:'full'},
  {path: '**', component: ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
