import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { HeaderComponent } from './components/header/header.component';
import { TablaCargasComponent } from './components/tabla-cargas/tabla-cargas.component';
import { CamionesService } from './services/camiones.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    HeaderComponent,
    TablaCargasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CamionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
