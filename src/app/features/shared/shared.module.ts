import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardPriceComponent } from './card-price/card-price.component';



@NgModule({
  declarations: [
    ListComponent,
    CardPriceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    CardPriceComponent
  ]
})
export class SharedModule { }
