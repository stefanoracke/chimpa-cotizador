import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
})
export class CardPriceComponent implements OnInit {

  constructor() { }

  finaciacionobject=[
    {
      name:'12 Cuotas sin interés',
      description: 'Se abona al inicio del proyecto <br> Plan Ahora 12 con tarjetas de banco Visa o MasterCard',
      cuotas: 12 
    },
    {
      name:'20% Off',
      description: 'Contado (Efectivo o Transferencia) <br> Pago total al comenzar el proyecto',
      cuotas: 0 
    },
    {
      name:'Financiación Propia',
      description: 'Cuotas sin interés <br> Contado (Efectivo o Transferencia)',
      cuotas: 5 
    }

  ]
  ngOnInit(): void {
  }

  precio=2000

}
