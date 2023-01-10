import { Component,EventEmitter,NgModule, OnInit, Output } from '@angular/core';
import { PropuestaService } from 'src/app/core/services/propuesta.service';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

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
