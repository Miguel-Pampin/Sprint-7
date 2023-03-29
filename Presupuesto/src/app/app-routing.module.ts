import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';
import { HomeComponent } from './Components/home/home.component';
import { Modal1Component } from './Components/modal1/modal1.component';
import { Modal2Component } from './Components/modal2/modal2.component';

const Approutes: Routes = [
  {
    path: '',
    component: BienvenidaComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'modal1',
    component: Modal1Component,
  },
  {
    path: 'modal2',
    component: Modal2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
