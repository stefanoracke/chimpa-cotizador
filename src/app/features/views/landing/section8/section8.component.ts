import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';


@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.scss']
})
export class Section8Component implements OnInit, AfterViewInit {

  constructor() { }
  title= "Metodología"
  
  @ViewChild("desarrollo", { read: DragScrollComponent }) ds!: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    
  }

}
