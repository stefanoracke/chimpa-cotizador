import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardPriceComponent } from './card-price/card-price.component';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [
    ListComponent,
    CardPriceComponent,
    TimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    CardPriceComponent,
    TimerComponent
  ]
})
export class SharedModule { }
