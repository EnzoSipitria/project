import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { CeldaPorcentajeComponent } from './components/celda-porcentaje/celda-porcentaje.component';
import { EstadoComponent } from './components/estado/estado.component';
import { CamionesService } from './services/camiones.service';
import { FechaPipe } from './pipes/fecha.pipe';
import { PorcentajeCargaService } from './services/porcentaje-carga.service';
import { WebsocketService } from './services/web-socket.service';
import { AvanceComponent } from './components/avance/avance.component';
import { FullmixComponent } from './components/fullmix/fullmix.component';
import { EstadoSistemaComponent } from './components/estado-sistema/estado-sistema.component';
import { ConnectionService } from './services/connection.service';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    CeldaPorcentajeComponent,
    EstadoComponent,
    FechaPipe,
    AvanceComponent,
    FullmixComponent,
    EstadoSistemaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CamionesService, PorcentajeCargaService, WebsocketService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
