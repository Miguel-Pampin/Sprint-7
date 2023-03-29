import { PreciosService } from '../../services/precios.service';
import { Component,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lista } from 'src/app/interfaces/listaInterface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges  {
  myForm:FormGroup = this.fb.group({
    nombreCliente:['',Validators.required],
    nombrePresupuesto:['',Validators.required],
    web:[false ,Validators.required],
    Seo: [false,Validators.required],
    publicidad:[false,Validators.required],
  })
  

get SumaTotal(){
  return this.PreciosService.totalPrice();
}

constructor(private fb:FormBuilder,private PreciosService:PreciosService ){}

mostrarPanel(campo:string){
  
  return this.myForm.controls[campo].value;
}


ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  
}

  ngOnInit()  {
    
      this.myForm.controls['web'].valueChanges.subscribe((web:boolean)  =>{
      this.PreciosService.ControlDelPanel(web,500)
    
    
    });
    this.myForm.controls['Seo'].valueChanges.subscribe((Seo:boolean)  =>{
      this.PreciosService.ControlDelPanel(Seo,300)
    
    
    });
    this.myForm.controls['publicidad'].valueChanges.subscribe((publicidad:boolean)  =>{
      this.PreciosService.ControlDelPanel(publicidad,200)
      
    
    });
   
  }
  estado !:boolean 
  get PresupuestoList() {
    return this.PreciosService.listaPresupuestos;
  }
  
  total:number = 0;
  controlarPrecio(campo:string , valor:number){
    if(this.myForm.controls[campo].value == true){
          this.PreciosService.totalHome -= valor
          
    }else if (this.myForm.controls[campo].value == false)  {
      this.PreciosService.totalHome += valor
    }
  }
  
  submitForm(){
    const NuevoPresupuesto: lista = 
    {      
      idPresupuesto: this.myForm.value.nombrePresupuesto,
      nombreCliente: this.myForm.value.nombreCliente,
      fecha: new Date,
      total: this.PreciosService.precioTotalGlobal
    }    
    if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
    }else if (this.myForm.valid) { 
      this.PreciosService.totalPrice();
      this.PresupuestoList.push(NuevoPresupuesto);
      console.log(this.PresupuestoList)
      this.PreciosService.restarTotal();
      this.myForm.reset({publicidad:false,Seo:false,web:false}); 
    } 
  }
  
}
