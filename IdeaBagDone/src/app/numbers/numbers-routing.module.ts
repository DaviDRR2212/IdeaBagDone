import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DistanceTwoCitiesComponent } from './components/distance-two-cities/distance-two-cities.component';

//http://localhost:4200/numbers
const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'distanceTwoCities',
    component: DistanceTwoCitiesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumbersRoutingModule { }
