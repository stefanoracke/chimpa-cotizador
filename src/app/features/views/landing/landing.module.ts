import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1Component } from './section1/section1.component';
import { CardPriceComponent } from '../../shared/card-price/card-price.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    Section1Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    Section1Component
  ]
})
export class LandingModule { }
