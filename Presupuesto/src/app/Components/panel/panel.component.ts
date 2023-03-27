import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PreciosService } from '../../services/precios.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private fb:FormBuilder , private PreciosService:PreciosService ) { }
  myPanellForm :FormGroup = this.fb.group({
    paginas:[0,[Validators.required , Validators.pattern(/^[1-9]\d*$/)]],
    idiomas:[0,[Validators.required , Validators.pattern(/^[1-9]\d*$/)]]
  })
  ngOnInit(){
    
}
  numPaginas: number = 0;
  numIdiomas: number = 0;


  panelPrice(){
    this.PreciosService.totalPanel = (this.numIdiomas + this.numPaginas)*30
    
  }

 
}
