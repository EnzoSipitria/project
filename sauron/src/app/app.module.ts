import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { TablaCargasComponent } from './components/tabla-cargas/tabla-cargas.component';
import { CamionesService } from './services/camiones.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    TablaCargasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CamionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
