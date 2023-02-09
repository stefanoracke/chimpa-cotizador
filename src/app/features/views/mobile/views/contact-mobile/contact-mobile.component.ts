import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent implements OnInit {

  private apiLoaded = false;
  height!:any
  @Input() videoId!: string;
  constructor() { }
  variables = {'rel':0, 'controls':0, 'autoplay':1, 'loop':1, 'modestbranding':1}

  ngOnInit(): void {
    this.height = innerHeight + 'px'
    if(!this.apiLoaded) {
      this.videoId='2-BYja7fdWE'
     const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
     this.apiLoaded = true;
    }
  }
}
