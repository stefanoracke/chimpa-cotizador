import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor() { }

  internal_navigation = 1

  title= "Precio y"
  subtitle = "Financiación"
  ngOnInit(): void {
  }


  changeView(n:number){
    this.internal_navigation = n
  }

}
