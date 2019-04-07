import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersRoutingModule } from './numbers-routing.module';
import { DistanceTwoCitiesComponent } from './components/distance-two-cities/distance-two-cities.component';
import { HomeComponent } from './components/home/home.component';
import { ListaEjerciciosComponent } from './components/lista-ejercicios/lista-ejercicios.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    DistanceTwoCitiesComponent, 
    HomeComponent, 
    ListaEjerciciosComponent],
  imports: [
    CommonModule,
    UtilsModule,
    NumbersRoutingModule,
  ]
})
export class NumbersModule { }
