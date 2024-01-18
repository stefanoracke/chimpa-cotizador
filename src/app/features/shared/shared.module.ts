import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {  CardPriceComponent, DownloadComponent } from './card-price/card-price.component';
import { TimerComponent } from './timer/timer.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { NavbarpcComponent } from './navbarpc/navbarpc.component';
import { CuotaspipePipe } from 'src/app/core/pipe/cuotaspipe.pipe';
import { FotterpcComponent } from './fotterpc/fotterpc.component';
import { SliderComponent } from './slider/slider.component';
import { UrltopagePipe } from 'src/app/core/pipe/urltopage.pipe';
import { AccordionComponent } from './accordion/accordion.component';
import { ClickedOutsideDirective } from 'src/app/core/directives/clicked-outside.directive';
import { TasaspipePipe } from 'src/app/core/pipe/tasa.pipe';
import { TituloComponent } from '../views/landing/titulo/titulo.component';
import { MilesPipe } from 'src/app/core/pipe/miles.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './loader/loader.component';
import { OptionalsPipe } from 'src/app/core/pipe/optionals.pipe';
import { DownloadPipe } from 'src/app/core/pipe/download.pipe';

import { ShareModule } from 'ngx-sharebuttons';
import { AccordionComboComponent } from './accordion-combo/accordion.component';


@NgModule({
  declarations: [
    ListComponent,
    DownloadComponent,
    CardPriceComponent,
    TimerComponent,
    NavbarpcComponent,
    CuotaspipePipe,
    FotterpcComponent,
    SliderComponent,
    UrltopagePipe,
    AccordionComponent,
    ClickedOutsideDirective,
    TasaspipePipe,
    TituloComponent,
    MilesPipe,
    NotFoundComponent,
    LoaderComponent,
    OptionalsPipe,
    DownloadPipe,
    AccordionComboComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShareModule,

  ],
  exports: [
    ListComponent,
    CardPriceComponent,
    DownloadComponent,
    
    TimerComponent,
    NavbarpcComponent,
    FotterpcComponent,
    SliderComponent,
    AccordionComponent,
    TituloComponent,
    LoaderComponent,
    NotFoundComponent,
    UrltopagePipe,
    MilesPipe,
    OptionalsPipe,
    DownloadPipe,
    ShareModule,
    AccordionComboComponent,

  ]
})
export class SharedModule { }
