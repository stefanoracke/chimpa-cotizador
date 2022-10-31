import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1Component } from './section1/section1.component';
import { CardPriceComponent } from '../../shared/card-price/card-price.component';
import { SharedModule } from '../../shared/shared.module';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';



@NgModule({
  declarations: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component
  ]
})
export class LandingModule { }
