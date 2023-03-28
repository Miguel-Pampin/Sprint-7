
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';
import { HomeComponent } from './Components/home/home.component';

const Approutes: Routes = [
  
  {
    path:'',
    component:BienvenidaComponent
    },

  {
    path:'home' ,
    component:HomeComponent
  } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

