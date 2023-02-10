import { Component, Input, OnInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Timer } from 'src/app/core/services/timer';


@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent implements OnInit {

  ended = false;
  private apiLoaded = false;
  height!:any;
  player!: YT.Player;
  videoId='2-BYja7fdWE' 
  constructor() { }
  variables = {'rel':0, 'controls':0, 'autoplay':1, 'loop':1, 'modestbranding':1}

  timer:Timer = new Timer(()=>{
    this.ended = true
    
  },14200)

  ngOnInit(): void {
    this.height = window.innerHeight 
    if(!this.apiLoaded) {
      
     const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
     this.apiLoaded = true;
    }

    if(this.apiLoaded){
      setTimeout(()=>{

        this.onYouTubeIframeAPIReady()
        setTimeout(()=>{
          this.player.playVideo()
          this.timer.resume()
        },3000)
      },1000)
    }
  }

  onPlayerReady(event:any) {
   
  }

  onPlayerStateChange(event:any) {
    
  }


  onYouTubeIframeAPIReady() {    
    this.player = new YT.Player('player-mobile', {
      height: this.height,
      playerVars:{'rel':0, 'controls':0, 'autoplay':1, 'loop':1, 'modestbranding':1},
      videoId: this.videoId,
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
    
    
  }
}
