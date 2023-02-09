import { Input, Component, OnInit,  } from '@angular/core';
import { first } from 'rxjs';

export interface Video {
      title: string;
     link: string;
  }

@Component({
  selector: 'app-section12',
  templateUrl: './section12.component.html',
  styleUrls: ['./section12.component.scss'],
})
export class Section12Component implements OnInit {
  private apiLoaded = false;

  @Input() videoId!: string;
  constructor() { }

  ngOnInit(): void {
    if(!this.apiLoaded) {
      this.videoId='2-BYja7fdWE'
     const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
     this.apiLoaded = true;
    }
  }

}
