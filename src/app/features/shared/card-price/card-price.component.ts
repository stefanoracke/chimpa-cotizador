import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
})
export class CardPriceComponent implements OnInit {

  constructor() { }
  
  precio=2000
  show = 0
  precio_modificado = this.precio
  precio_muestra = this.precio
  cuotas!:number | undefined

  finaciacionobject=[
    {
      name:'12 Cuotas sin interés',
      description: 'Se abona al inicio del proyecto <br> Plan Ahora 12 con tarjetas de banco Visa o MasterCard',
      cuotas: 12,
      id_name:1,
      show:false

    },
    {
      name:'20% Off',
      description: 'Contado (Efectivo o Transferencia) <br> Pago total al comenzar el proyecto',
      cuotas: 0,
      id_name:2,
      show:false
    },
    {
      name:'Financiación Propia',
      description: 'Cuotas sin interés',
      description2: 'Contado (Efectivo o Transferencia)',
      cuotas: 5,
      id_name:3,
      show:false
    }

  ]

  showFin(i:number){
    if(this.show == i+1){
      this.show = 0;
      this.precio_modificado = this.precio
      this.precio_muestra = this.precio
      this.cuotas = undefined
    } 
    else{
      this.cuotas = this.finaciacionobject[i].cuotas
      this.show = i+1
      this.changeTotal(i);
    }
    
  }

  ngOnInit(): void {
    
  }

  changeTotal(n:number){
    if(this.finaciacionobject[n].cuotas!=0){
      this.precio_modificado = Math.round(this.precio/this.finaciacionobject[n].cuotas)
      this.precio_muestra = this.precio
    }else{
      this.precio_modificado = this.precio*.2
      this.precio_muestra = this.precio*.8
      
    }
  }

}
