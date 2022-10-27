import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  currentDate: any;
	date: Date = new Date();
	
	eventDate: any = new Date("Oct 28, 2022 16:40:00").getTime();
	timeLeftSeconds = Math.floor((this.eventDate - this.date.getTime()) / 1000);
  	timeLeft={
		hours : "",
		minutes : "",
		seconds : "",
	};

	constructor() {
    this.countDown();
	}

	countDown() {
		let intervalId = setInterval(() => {
			this.timeLeftSeconds = this.timeLeftSeconds - 1;
      	this.timeLeft=this.calculateTime(this.timeLeftSeconds);
			if (this.timeLeftSeconds === 0) clearInterval(intervalId);
		}, 1000);
	}
	calculateTime(timeLeftSeconds: number): any {
		
		const hours = Math.floor((timeLeftSeconds / (3600)));
		const minutes =  Math.floor(((timeLeftSeconds - hours*3600) / (60)));
		const seconds = Math.floor((timeLeftSeconds - hours*3600 - minutes*60))
		let date = {
			hours: hours,
			minutes: minutes,
			seconds: seconds
		}   
		return date;
	}

  ngOnInit(): void {
  }

  

}
