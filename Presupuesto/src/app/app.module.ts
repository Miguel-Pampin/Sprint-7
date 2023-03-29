import { PreciosService } from './services/precios.service';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PanelComponent } from './Components/panel/panel.component';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';
import { Modal1Component } from './Components/modal1/modal1.component';
import { Modal2Component } from './Components/modal2/modal2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    BienvenidaComponent,
    Modal1Component,
    Modal2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  providers: [PreciosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
