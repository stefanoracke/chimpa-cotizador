
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PropuestaService } from 'src/app/core/services/propuesta.service';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectAllPropuesta, selectRegion, selectactalPrice } from 'src/app/core/store/selectors/prices.selector';

export interface PromotionI {
  created_at: Date;
  descont: string;
  id: string;
  projects_id: string;
  status_id: string;
  time_duration?: string;
  updated_at?: string;
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
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
  actualPrice$!:Subscription
  apiCall!:Subscription
  constructor(
    private propService: PropuestaService, private store:Store<AppState>
    ) {
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
    
    this.apiCall = this.store.select(selectAllPropuesta).subscribe((res) => {
      this.propuesta=res
      if(res.promotions[0].updated_at){
        let fecha = Date.parse(res.promotions[0].updated_at) 
        let evento = fecha + res.promotions[0]?.time_duration*1000 * 60 * 60   - this.date.getTime()
        this.timeLeftSeconds = Math.floor(((evento) ) / 1000);
      }
    });
    this.actualPrice$ = this.store.select(selectactalPrice).subscribe(res => {
      this.store.select(selectRegion).subscribe(region=>{
        const descont = this.propuesta.promotions[0].descont/100
        if(region.id == 1 && descont){
          let solidary_usd = region.solidarity_usd
          const precioActualArs=res.price*solidary_usd 
          this.precio= precioActualArs- (precioActualArs * descont)
        }else{
          this.precio=res.price - (res.price * descont)
        }
      })
      
    }
    )
  }
  ngOnDestroy(): void {
      this.actualPrice$?.unsubscribe()
      this.apiCall?.unsubscribe()
  }
}
