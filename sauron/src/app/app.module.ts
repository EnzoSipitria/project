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
import { OrderByPipe } from './pipes/order-by.pipe';
import { MyRowComponent } from './components/my-row/my-row.component';
import { AppRoutingModule } from './components/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    CeldaPorcentajeComponent,
    EstadoComponent,
    ClockComponent,
    CellContentComponent,
    OrderByPipe,
    MyRowComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    AppRoutingModule,
  ],
  providers: [CamionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
