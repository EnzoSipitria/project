import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { CeldaPorcentajeComponent } from './components/celda-porcentaje/celda-porcentaje.component';
import { EstadoComponent } from './components/estado/estado.component';
import { CamionesService } from './services/camiones.service';
import { ClockComponent } from './components/clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    CeldaPorcentajeComponent,
    EstadoComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CamionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
