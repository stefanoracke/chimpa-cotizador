
import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';

export interface PromotionI {
  created_at: Date;
  descont: string;
  id: string;
  projects_id: string;
  status_id: string;
  time_duration: string;
  updated_at: string;
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  currentDate: any;
  date: Date = new Date();
	precio!:number;
	  eventDate: any = new Date('Nov 3, 2022 16:40:00').getTime();
  timeLeftSeconds = Math.floor((this.eventDate - this.date.getTime()) / 1000);
  timeLeft = {
    hours: '',
    minutes: '',
    seconds: '',
  };
  propuesta:any

  constructor(private propService: PropuestaService) {
    this.countDown();
  }

  countDown() {
    let intervalId = setInterval(() => {
      this.timeLeftSeconds = this.timeLeftSeconds - 1;
      this.timeLeft = this.calculateTime(this.timeLeftSeconds);
      if (this.timeLeftSeconds === 0) clearInterval(intervalId);
    }, 1000);
  }
  calculateTime(timeLeftSeconds: number): any {
    let hours = Math.floor(timeLeftSeconds / 3600);
    let minutes = Math.floor((timeLeftSeconds - hours * 3600) / 60);
    let seconds = Math.floor(timeLeftSeconds - hours * 3600 - minutes * 60);
    if (timeLeftSeconds < 0) {
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
    let date = {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    return date;
  }

  ngOnInit(): void {
    this.propService.getPropuesta().subscribe((res) => {
      this.propuesta=res
	  let fecha = Date.parse(res.promotions[0].updated_at) 
	  let evento = fecha + res.promotions[0].time_duration*1000 * 60 * 60   - this.date.getTime()
	  this.timeLeftSeconds = Math.floor(((evento) ) / 1000);

	  if(res.clients.regions_id == 1){
        let solidary_usd = res.solidarity_usd
        this.precio=res.price*solidary_usd - (res.price*solidary_usd * (res.promotions[0].descont/100))
        
      }else{

        this.precio=res.price - (res.price * (res.promotions[0].descont/100))
        
      }
	  
    });
  }
}
