import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreciosService } from '../../services/precios.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private PreciosService: PreciosService,
    public modal: NgbModal
  ) {}
  myPanellForm: FormGroup = this.fb.group({
    paginas: [0, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
    idiomas: [0, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
  });
  ngOnInit() {}
  numPaginas: number = 0;
  numIdiomas: number = 0;

  panelPrice() {
    this.PreciosService.totalPanel = (this.numIdiomas + this.numPaginas) * 30;
  }

  sumar(campo: string) {
    if (campo === 'paginas') {
      this.numPaginas++;
    } else if (campo === 'idiomas') {
      this.numIdiomas++;
    }
    this.panelPrice();
  }

  restar(valor: number, campo: string) {
    if (valor > 0 && campo === 'paginas') {
      this.numPaginas--;
    } else if (valor > 0 && campo === 'idiomas') {
      this.numIdiomas--;
    }

    this.panelPrice();
  }
}
