import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section12',
  templateUrl: './section12.component.html',
  styleUrls: ['./section12.component.scss'],
})
export class Section12Component implements OnInit, AfterViewInit {
  start = true;
  play = false;
  @ViewChild('video') video!: ElementRef;

  constructor() {}

  playVideo() {
    if (this.video.nativeElement.paused){

      this.video.nativeElement.play();
      this.play=true
    } 
    else {
      this.video.nativeElement.pause();
      this.play=false
    }
    
    this.start = false;
  }

  endedVideo(){

    let videoDoc = document.getElementById('video')
    if(videoDoc)videoDoc.addEventListener('ended', this.handlerVideo, false); //Agregar un listener para detectar cuando termina el video y mandarle la función que debe de ejecutar en ese instante
  }

  handlerVideo(e:any) {
    this.video.nativeElement.currentTime=0;
    this.video.nativeElement.pausue()
    this.start=true
}

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.endedVideo()
  }
}
