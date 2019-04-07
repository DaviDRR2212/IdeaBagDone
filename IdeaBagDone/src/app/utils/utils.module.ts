import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot(environment.googleMapsConfig),
  ],
  exports: [
    AgmCoreModule
  ]
})
export class UtilsModule { }
