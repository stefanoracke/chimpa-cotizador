import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1Component } from './section1/section1.component';
import { CardPriceComponent } from '../../shared/card-price/card-price.component';
import { SharedModule } from '../../shared/shared.module';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { IncluidosComponent } from './incluidos/incluidos.component';
import { MenuitemsComponent } from './section6/menuitems/menuitems.component';
import { Setion7Component } from './section7/setion7.component';
import { TituloComponent } from './titulo/titulo.component';
import { Section8Component } from './section8/section8.component';
import { Section9Component } from './section9/section9.component';
import { Section10Component } from './section10/section10.component';
import { Section11Component } from './section11/section11.component';
import { Section12Component } from './section12/section12.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { OptionalsPipe } from 'src/app/core/pipe/optionals.pipe';



@NgModule({
  declarations: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    IncluidosComponent,
    MenuitemsComponent,
    Setion7Component,
    
    Section8Component,
    Section9Component,
    Section10Component,
    Section11Component,
    Section12Component,
    OptionalsPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    LottieAnimationViewModule.forRoot()
  ],
  exports: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Setion7Component,
    Section8Component,
    Section9Component,
    Section10Component,
    Section11Component,
    Section12Component,
    
  ]
})
export class LandingModule { }
