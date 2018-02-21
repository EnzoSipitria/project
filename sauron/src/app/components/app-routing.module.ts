import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './carga/carga.component';
import { AddCargaFormComponent } from './add-carga-form/add-carga-form.component';
import { Carga2Component } from './carga2/carga2.component';



const routes: Routes = [
  { path: '', redirectTo: '/mainBoard', pathMatch: 'full' },
  {path: 'mainBoard',component: CargaComponent},
  {path: 'board2',component:Carga2Component},
  {path: 'addCarga', component: AddCargaFormComponent},
 
];

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule {


 }
