import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor() { }

  title= "Precio y"
  subtitle = "Financiación"
  ngOnInit(): void {
  }

}
