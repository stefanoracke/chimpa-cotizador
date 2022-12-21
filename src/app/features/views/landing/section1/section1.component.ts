import { Component,NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  public lottieConfig: Object;
  public anim: any;
  public animationSpeed: number = 1;

  constructor() {
      this.lottieConfig = {
          path: './../../../../../assets/animations/cohete.json',
          renderer: 'svg',
          autoplay: true,
          loop: true
      };
  }

  handleAnimation(anim: any) {
      this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed(speed: any) {
      this.animationSpeed = speed;
      this.anim.setSpeed(speed);
  }

  ngOnInit(): void {
    this.lottieConfig = {
      path: 'assets/animations/cohete.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
  }

}
