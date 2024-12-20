import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1Component } from './section1/section1.component';
import { SharedModule } from '../../shared/shared.module';
import { Section3Component } from './informacionDesk/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { IncluidosComponent } from './incluidos/incluidos.component';
import { MenuitemsComponent } from './section6/menuitems/menuitems.component';
import { Setion7Component } from './serviciosDesk/setion7.component';

import { Section8Component } from './section8/section8.component';
import { Section9Component } from './section9/section9.component';
import { Section10Component } from './faqsDesk/section10.component';
import { Section11Component } from './section11/section11.component';
import { Section12Component } from './section12/section12.component';
import { LottieAnimationViewModule } from 'ng-lottie';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { DragScrollModule } from 'ngx-drag-scroll';

//lotie player
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { AmpliarPropuestaComponent } from './ampliar-propuesta/ampliar-propuesta.component';
import { ScrollDownComponent } from '../../shared/scroll-down/scroll-down.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}



@NgModule({
  declarations: [
    Section1Component,
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
    AmpliarPropuestaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LottieModule.forRoot({ player: playerFactory }),
    DragScrollModule,
    MaterialModule,
    ScrollDownComponent,
    YouTubePlayerModule
  ],
  exports: [
    Section1Component,
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
    AmpliarPropuestaComponent,
  ]
})
export class LandingModule { }
