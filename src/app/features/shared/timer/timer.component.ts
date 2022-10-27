import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  currentDate: any;
	date: Date = new Date();
	hours = "";
	minutes = "";
	seconds = "";
	eventDate: any = new Date("Oct 31, 2022 16:40:00").getTime();
	timeLeftSeconds = Math.floor((this.eventDate - this.date.getTime()) / 1000);
  	timeLeftString="";

	constructor() {
    this.countDown();
	}

	countDown() {
		let intervalId = setInterval(() => {
			this.timeLeftSeconds = this.timeLeftSeconds - 1;
      	this.timeLeftString=this.calculateTime(this.timeLeftSeconds);
			if (this.timeLeftSeconds === 0) clearInterval(intervalId);
		}, 1000);
	}
	calculateTime(timeLeftSeconds: number): string {
		
		const hours = Math.floor((timeLeftSeconds / (3600)));
		const minutes =  Math.floor(((timeLeftSeconds - hours*3600) / (60)));
		const seconds = Math.floor((timeLeftSeconds - hours*3600 - minutes*60))
		let date =  hours+ 'h' + minutes + 'm'+ seconds	 + "s";
		return date;
	}

  ngOnInit(): void {
  }

  

}
