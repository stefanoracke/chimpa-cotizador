import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export interface PreguntasI{
  pregunta:string
  answer: string
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @ViewChild('accordionshow') accordion!:ElementRef<HTMLElement>
  @Input() pregunta!:PreguntasI


  constructor() { }
  click=false
  colorText = '#00214B'
  height = 0

  accordionClick(){
    this.click= !this.click
    if(this.height == 0){
      this.height =this.accordion.nativeElement.scrollHeight
    }else{
      this.height = 0
    }
    this.accordion.nativeElement.style.maxHeight = `${this.height}px`
    
  }

  handleChange() {
    this.click= false
    this.height = 0
    this.accordion.nativeElement.style.maxHeight = `${this.height}px`
  }
  ngOnInit(): void {
  }

}
