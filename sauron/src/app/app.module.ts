import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { HeaderComponent } from './components/header/header.component';
import { TablaCargasComponent } from './components/tabla-cargas/tabla-cargas.component';
import { KeysPipe } from './pipes/keys.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    HeaderComponent,
    TablaCargasComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
