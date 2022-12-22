import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-section7',
  templateUrl: './setion7.component.html',
  styleUrls: ['./setion7.component.scss']
})
export class Setion7Component implements OnInit, OnDestroy {

  constructor(private prpService:PropuestaService) { }
  subscription!:Subscription
  title="Otras Opciones"
  color = '#ffffff'
  options!:Array<any>
  propuesta!:any
 

  changePrice(price:number, solidaryUSD:number){
    return price*solidaryUSD
  }


  ngOnInit(): void {
    this.subscription = this.prpService.getPropuesta()
    .subscribe(res=>{
      this.options=res.prices 
      this.propuesta =res
      
      
      
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  

}
