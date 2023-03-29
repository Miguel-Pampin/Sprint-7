import { PreciosService } from './../../services/precios.service';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-presupuesto-lista',
  templateUrl: './presupuesto-lista.component.html',
  styleUrls: ['./presupuesto-lista.component.css']
})
export class PresupuestoListaComponent {

  constructor(public PreciosService:PreciosService){ }

  ngOninit(){
    this.PreciosService.getListFromLocalStorage('lista');
  }
  get Lista() {
    return this.PreciosService.listaPresupuestos;
  }
  ordenadoAz(){
    this.PreciosService.ordenadoAz();
  }  

  ordenFecha(){
    this.PreciosService.ordenFecha();
  }
  reset(){
    this.PreciosService.reset()
  }
}

