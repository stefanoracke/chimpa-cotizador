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
    this.getNavigation()
  }

  getNavigation(){
    let n= localStorage.getItem("navigation_prices")
    if(n!=null) this.internal_navigation=parseInt(n)
    console.log(this.internal_navigation)
  }

  changeView(n:number){
    this.internal_navigation = n
    
    localStorage.setItem("navigation_prices", this.internal_navigation.toString())
  }

}
