import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor(private propSvc:PropuestaService, private router: Router) { }
  timeLeftSeconds:any
  internal_navigation = 1
  time = false;
  date:Date = new Date()
  empresa!:any
  prop = localStorage.getItem('propuesta')

  title= "Precio y"
  subtitle = "Financiación"
  ngOnInit(): void {
    this.getNavigation()

    if(this.prop){let res = JSON.parse(this.prop)

    if(res){
        this.empresa = res.clients.business_name
	      let fecha = Date.parse(res.promotions[0].updated_at) 
	      let evento = fecha + res.promotions[0].time_duration*1000 * 60 * 60   - this.date.getTime()
	      this.timeLeftSeconds = Math.floor(((evento) ) / 1000);
        this.time = this.timeLeftSeconds>0
    }
  }
  }

  getNavigation(){
    let n= localStorage.getItem("navigation_prices")
    if(n!=null) this.internal_navigation=parseInt(n)
   
  }

  changeView(n:number){
    this.internal_navigation = n
    
    localStorage.setItem("navigation_prices", this.internal_navigation.toString())
  }

  redirectTo(ruta:string){
   
    let nuevaruta = localStorage.getItem('empresa_url')

    if(ruta == '/'){
      if(nuevaruta)
      this.router.navigateByUrl(nuevaruta);
    }else{
      if(nuevaruta)
      this.router.navigateByUrl(nuevaruta+'/'+ruta)
      .then(() => {
        window.location.reload();
       
      });  
    }
    
    
  }

}
