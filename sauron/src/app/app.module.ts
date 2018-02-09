import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { CeldaPorcentajeComponent } from './components/celda-porcentaje/celda-porcentaje.component';
import { EstadoComponent } from './components/estado/estado.component';
import { CamionesService } from './services/camiones.service';
import { FechaPipe } from './pipes/fecha.pipe';
import { TimeComponent } from './components/time/time.component';
import { PorcentajeCargaService } from './services/porcentaje-carga.service';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    CeldaPorcentajeComponent,
    EstadoComponent,
    FechaPipe,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CamionesService, PorcentajeCargaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
