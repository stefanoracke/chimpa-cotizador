import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardPriceComponent } from './card-price/card-price.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';



@NgModule({
  declarations: [
    ListComponent,
    CardPriceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListComponent,
    CardPriceComponent
  ]
})
export class SharedModule { }
