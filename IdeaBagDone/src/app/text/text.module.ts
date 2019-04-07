import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextRoutingModule } from './text-routing.module';
import { UtilsModule } from '../utils/utils.module';
import { VisualModule } from '../visual/visual.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UtilsModule,
    VisualModule,
    TextRoutingModule,
  ]
})
export class TextModule { }
