import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardPriceComponent } from './card-price/card-price.component';
import { TimerComponent } from './timer/timer.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { NavbarpcComponent } from './navbarpc/navbarpc.component';
import { CuotaspipePipe } from 'src/app/core/pipe/cuotaspipe.pipe';



@NgModule({
  declarations: [
    ListComponent,
    CardPriceComponent,
    TimerComponent,
    NavbarpcComponent,
    CuotaspipePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports: [
    ListComponent,
    CardPriceComponent,
    TimerComponent,
    NavbarpcComponent
  ]
})
export class SharedModule { }
