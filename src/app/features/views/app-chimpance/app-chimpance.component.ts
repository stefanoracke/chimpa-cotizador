import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';


@Component({
  selector: 'app-app-chimpance',
  templateUrl: './app-chimpance.component.html',
  styleUrls: ['./app-chimpance.component.scss']
})
export class AppChimpanceComponent implements OnInit {

  timeLeftSeconds:any
    date: Date = new Date();
  constructor(private propSvc:PropuestaService) { }
  services!:any
  prices!:any
 
  propuesta= true
  pc = true
  time = false
 
  stopCarga(bool:boolean){
    this.propuesta = bool
  }

  ngOnInit(): void {
    this.propSvc.getPropuesta().subscribe(
      res=>{
        console.log(res)
        console.log(res.services.length)
        this.prices = res.prices.length
        this.services = res.services.length
	      let fecha = Date.parse(res.promotions[0].updated_at) 
	      let evento = fecha + res.promotions[0].time_duration*1000 * 60 * 60   - this.date.getTime()
	      this.timeLeftSeconds = Math.floor(((evento) ) / 1000);
        this.time = this.timeLeftSeconds>0
      }
    )

    

    if(window.innerWidth<1000){
      this.pc=false
    }
  }

}
