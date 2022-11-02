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
import { Setion7Component } from './setion7/setion7.component';
import { TituloComponent } from './titulo/titulo.component';



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
    TituloComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Setion7Component
  ]
})
export class LandingModule { }
