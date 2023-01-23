import { Component,EventEmitter,NgModule, OnInit, Output } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';


import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  public widhtcoehete = '60vw'
  public lottieConfig: Object;
  public anim: any;
  public animationSpeed: number = 1;
  nameempresa!:any
    @Output() stopLoad =  new EventEmitter<boolean>();

  constructor(private propService:PropuestaService) {
      this.lottieConfig = {
          path: './../../../../../assets/animations/cohete.json',
          renderer: 'svg',
          autoplay: true,
          loop: true
      };
  }

  options: AnimationOptions = {
    path: '/assets/animations/cohete.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
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
  newEvent(value:boolean){
    this.stopLoad.emit(value)
  }

  coheteWidth(){
    if(window.innerWidth > 1800){

      this.widhtcoehete = '60vw'
    }else{
      this.widhtcoehete = '50vw'
    }
  }

  ngOnInit(): void {
  
    this.lottieConfig = {
      path: 'assets/animations/cohete.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };


  

    this.propService.getPropuesta().subscribe(res=>{
        this.nameempresa = res.clients.business_name
    })
  }

}
