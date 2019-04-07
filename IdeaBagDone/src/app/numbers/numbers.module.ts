import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersRoutingModule } from './numbers-routing.module';
import { DistanceTwoCitiesComponent } from './distance-two-cities/distance-two-cities.component';
import { HomeComponent } from './home/home.component';
import { ListaEjerciciosComponent } from './lista-ejercicios/lista-ejercicios.component';

@NgModule({
  declarations: [DistanceTwoCitiesComponent, HomeComponent, ListaEjerciciosComponent],
  imports: [
    CommonModule,
    NumbersRoutingModule
  ]
})
export class NumbersModule { }
