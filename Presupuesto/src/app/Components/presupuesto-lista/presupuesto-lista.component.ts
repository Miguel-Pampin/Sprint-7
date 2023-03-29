import { PreciosService } from './../../services/precios.service';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-presupuesto-lista',
  templateUrl: './presupuesto-lista.component.html',
  styleUrls: ['./presupuesto-lista.component.css']
})
export class PresupuestoListaComponent {

  constructor(public PreciosService:PreciosService){ }

  ngOninit(){}
  get Lista() {
    return this.PreciosService.listaPresupuestos;
  }
}
