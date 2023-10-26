import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducer';
import { selectAdded } from 'src/app/core/store/selectors/prices.selector';

export interface PreguntasI {
  question: string
  response: string
}

@Component({
  selector: 'combo-accordion',
  templateUrl: './accordion-combo.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComboComponent implements OnInit {

  @ViewChild('accordionshow') accordion!: ElementRef<HTMLElement>
  @Input() item!: any
  @Input() region!: any
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store<AppState>) { }
  click = false
  active = false
  added$?: Observable<any>
  added: any
  colorText = '#00214B'
  height = 0
  accordionClick() {
    this.click = !this.click
    if (this.height == 0) {
      this.height = this.accordion.nativeElement.scrollHeight
    } else {
      this.height = 0
    }
    this.accordion.nativeElement.style.maxHeight = `${this.height}px`

  }

  outputClick(item: any) {
    this.active = !this.active
    this.onClick.emit(item)
  
  }



  handleChange() {
    this.click = false
    this.height = 0
    this.accordion.nativeElement.style.maxHeight = `${this.height}px`
  }
  ngOnInit(): void {
    this.added$ = this.store.select(selectAdded)
    
  }

}
