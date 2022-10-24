
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

export interface OptionalObjectI{
  title:string
  paragraph:string
  image:string
}

@Component({
  selector: 'app-optional-components',
  templateUrl: './optional-components.component.html',
  styleUrls: ['./optional-components.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OptionalComponentsComponent implements OnInit {
  title="Opcionales"
  constructor( public activeRoute:ActivatedRoute) { 
    this.activeRoute.queryParams.subscribe((res) => {
      this.object={
        title: res["title"],
        paragraph: res["paragraph"],
        image: res["image"]
      } 
     
    })
  }
  object!:OptionalObjectI
  ngOnInit(): void {
    
    
  }

}
