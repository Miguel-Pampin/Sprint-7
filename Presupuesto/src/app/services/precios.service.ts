import { Injectable, OnInit } from "@angular/core";
import { lista } from "../interfaces/listaInterface";


@Injectable()

export class PreciosService implements OnInit {
public listaPresupuestos:lista[]=[]
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
    restarTotal(){
        this.totalPanel = 0;
        this.totalHome = 0 ;
        this.precioTotalGlobal= 0;
    }

  }