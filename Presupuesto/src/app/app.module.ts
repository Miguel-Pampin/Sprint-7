import { PreciosService } from './services/precios.service';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PanelComponent } from './Components/panel/panel.component';

  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [
    PreciosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
