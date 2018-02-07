import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { CeldaPorcentajeComponent } from './components/celda-porcentaje/celda-porcentaje.component';
import { EstadoComponent } from './components/estado/estado.component';
import { CamionesService } from './services/camiones.service';
import { ClockComponent } from './components/clock/clock.component';
import { CellContentComponent } from './components/cell-content/cell-content.component';
import { AddCargasComponent } from './components/add-cargas/add-cargas.component';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    CeldaPorcentajeComponent,
    EstadoComponent,
    ClockComponent,
    CellContentComponent,
    AddCargasComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
  ],
  providers: [CamionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
