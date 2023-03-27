import { Injectable, OnInit } from "@angular/core";


@Injectable()

export class PreciosService implements OnInit {

    totalHome:number = 0;
    precioTotalGlobal:number = 0
    totalPanel:number = 0
    ngOnInit() {
    
    }
    constructor(){
        
    }
    
    ControlDelPanel(campo:boolean,valor:number){
            if(campo == false && valor == 500){
                this.totalPanel = 0;
            }
    }

    

    totalPrice(){
        this.precioTotalGlobal = (this.totalHome + this.totalPanel );
        return this.precioTotalGlobal;
    }
   
  }