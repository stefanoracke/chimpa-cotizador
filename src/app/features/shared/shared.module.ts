import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardPriceComponent } from './card-price/card-price.component';
import { TimerComponent } from './timer/timer.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { NavbarpcComponent } from './navbarpc/navbarpc.component';
import { CuotaspipePipe } from 'src/app/core/pipe/cuotaspipe.pipe';
import { FotterpcComponent } from './fotterpc/fotterpc.component';
import { SliderComponent } from './slider/slider.component';
import { UrltopagePipe } from 'src/app/core/pipe/urltopage.pipe';
import { AccordionComponent } from './accordion/accordion.component';
import { ClickedOutsideDirective } from 'src/app/core/directives/clicked-outside.directive';



@NgModule({
  declarations: [
    ListComponent,
    CardPriceComponent,
    TimerComponent,
    NavbarpcComponent,
    CuotaspipePipe,
    FotterpcComponent,
    SliderComponent,
    UrltopagePipe,
    AccordionComponent,
    ClickedOutsideDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports: [
    ListComponent,
    CardPriceComponent,
    TimerComponent,
    NavbarpcComponent,
    FotterpcComponent,
    SliderComponent,
    AccordionComponent
  ]
})
export class SharedModule { }
