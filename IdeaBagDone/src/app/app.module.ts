import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaModulosComponent } from './lista-modulos/lista-modulos.component';
import { VisualModule } from './visual/visual.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaModulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VisualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
