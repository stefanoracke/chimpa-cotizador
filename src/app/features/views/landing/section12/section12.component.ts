import { Input, Component, OnInit, AfterViewInit,  } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Timer } from 'src/app/core/services/timer';



export interface Video {
      title: string;
     link: string;
  }

@Component({
  selector: 'app-section12',
  templateUrl: './section12.component.html',
  styleUrls: ['./section12.component.scss'],
})
export class Section12Component implements OnInit, AfterViewInit {
  private apiLoaded = false;
  player!: YT.Player;
  pause = true;
  hoverPause=false
  countdown = 3000  
  ended = false
  timer:Timer = new Timer(()=>{
    this.ended = true
    this.pause=true
  },13000)

  @Input() videoId!: string;
  constructor( ) { }

  ngOnInit(): void {
    
    if(!this.apiLoaded) {
      this.videoId='2-BYja7fdWE'
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;

      
    }
  }
  ngAfterViewInit(): void {
    if(this.apiLoaded){
      setTimeout(()=>{

        this.onYouTubeIframeAPIReady()
      },1000)
    }
  }

  onYouTubeIframeAPIReady() {
    
    this.player = new YT.Player('playerpc', {
      height: '600',
      playerVars:{'rel':0, 'controls':0,'modestbranding':1,'showinfo':0},
      videoId: this.videoId,
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  }

  onPlayerReady(event:any) {
    
  }

  onPlayerStateChange(event:any) {
    let pauseVideo = false
    
    if(event.data == 0){
      
      pauseVideo=true
    }

    
  }
  playVideoYT() {
    if(this.ended){
      this.ended=false
      this.timer = new Timer(()=>{
        this.ended = true
        this.pause=true
      },13000)
    
    }
    this.timer.resume()
    if(this.player as YT.Player ){

      this.player.playVideo();
      this.pause= false
     
    }
  }
recargarYT(){
  this.player.seekTo(0,true)
  this.pause=false
  
}
pauseVideoYT() {
    this.timer.pause()
    this.player.pauseVideo();
    this.pause=true
  }


//   savePlayer(player:any) {
//     this.player = player;
//     console.log('player instance', player);
//   }
//   onStateChange(event:any) {
//     console.log('player state', event.data);
//   }
}
