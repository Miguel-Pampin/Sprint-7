import { PreciosService } from './services/precios.service';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PanelComponent } from './Components/panel/panel.component';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    BienvenidaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  providers: [PreciosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
