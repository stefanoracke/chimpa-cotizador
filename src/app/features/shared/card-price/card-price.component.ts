import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
})
export class CardPriceComponent implements OnInit {

  constructor() { }

  show = 0

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
    if(this.show == i+1){this.show = 0;} 
    else{
      this.show = i+1
    }
    
  }

  ngOnInit(): void {
  }

  precio=2000

}
