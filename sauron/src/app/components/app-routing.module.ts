import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './carga/carga.component';
import { AddCargaFormComponent } from './add-carga-form/add-carga-form.component';



const routes: Routes = [
  { path: '', redirectTo: '/mainBoard', pathMatch: 'full' },
  {path: 'mainBoard',component: CargaComponent},
  {path: 'addCarga', component: AddCargaFormComponent},
 
];

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule {


 }
