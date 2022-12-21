import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
})
export class CardPriceComponent implements OnInit, OnDestroy {

  constructor( private propuestaSvc:PropuestaService) { }
  
  project_subscription!:Subscription
  precio!:number
  show = 0 
  precio_modificado!:number
  precio_muestra!:number 
  cuotas!:number | undefined
  tasa!:any
  propuesta!:any

  finaciacionobject!:Array<any>

  showFin(i:number){
    
    this.show = i
    let element = this.finaciacionobject.find(res => i === res.id)
    
    if(element?.share){
      this.tasa=undefined
      this.precio_muestra = this.precio
      this.cuotas = element.share
      this.precio_modificado = this.precio/element.share
    } else{
      this.cuotas = undefined
      this.tasa=undefined
      this.precio_muestra = this.precio
      // this.tasa=10
      // let n = 10
      // let x = 100 - n
      // this.precio_modificado = this.precio*n/100
      // this.precio_muestra = this.precio*x/100
    }
    if(element?.descont){
      
      this.tasa = element.descont
      let n = this.tasa 
      let x = 100 - this.tasa
      this.precio_modificado = this.precio*n/100
      this.precio_muestra = this.precio*x/100
    }
    // if(this.show == i){
    //   this.show = 0;
    //   this.precio_modificado = this.precio
    //   this.precio_muestra = this.precio
    //   this.cuotas = undefined
    // } 
    // else{
    //   this.cuotas = this.finaciacionobject[i].cuotas
    //   this.show = i+1
    //   this.changeTotal(i);
    // }
    
  }

  ngOnInit(): void {
    this.project_subscription = this.propuestaSvc.getPropuesta().subscribe(res=>{
      this.propuesta=res
      
      if(res.clients.regions_id == 1){
        let solidary_usd = res.solidarity_usd
        this.precio=res.price*solidary_usd
        this.precio_modificado=res.price*solidary_usd
        this.precio_muestra=res.price*solidary_usd
      }else{

        this.precio=res.price
        this.precio_modificado=res.price
        this.precio_muestra=res.price
      }
      this.finaciacionobject=res.payment_types
      console.log(res)
    })
  }
  ngOnDestroy(): void {
    this.project_subscription.unsubscribe()
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
