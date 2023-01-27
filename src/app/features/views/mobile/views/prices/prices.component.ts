import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor(private propSvc:PropuestaService) { }
  timeLeftSeconds:any
  internal_navigation = 1
  time = false;
  date:Date = new Date()
  empresa!:any

  title= "Precio y"
  subtitle = "Financiación"
  ngOnInit(): void {
    this.getNavigation()

    this.propSvc.getPropuesta().subscribe(
      res=>{
        this.empresa = res.clients.business_name
	      let fecha = Date.parse(res.promotions[0].updated_at) 
	      let evento = fecha + res.promotions[0].time_duration*1000 * 60 * 60   - this.date.getTime()
	      this.timeLeftSeconds = Math.floor(((evento) ) / 1000);
        this.time = this.timeLeftSeconds>0
      }
    )
  }

  getNavigation(){
    let n= localStorage.getItem("navigation_prices")
    if(n!=null) this.internal_navigation=parseInt(n)
   
  }

  changeView(n:number){
    this.internal_navigation = n
    
    localStorage.setItem("navigation_prices", this.internal_navigation.toString())
  }

}
