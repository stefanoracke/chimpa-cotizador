import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHomeComponent } from './mobile-home/mobile-home.component';
import { NavbarMobileComponent } from './components/navbar/navbar.component';
import { PricesComponent } from './views/prices/prices.component';
import { InfoComponent } from './views/info/info.component';
import { WorkMethodologyComponent } from './views/work-methodology/work-methodology.component';
import { OptionalComponent } from './views/optional/optional.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AppChimpanceComponent } from '../app-chimpance/app-chimpance.component';
import { MobileRoutingModule } from './mobile.routing.module';
import { FooterMobileComponent } from './components/footer-mobile/footer-mobile.component';
import { AnimationHomeComponent } from './components/animation-home/animation-home.component';



@NgModule({
  declarations: [
    AppChimpanceComponent,
    MobileHomeComponent,
    NavbarMobileComponent,
    PricesComponent,
    InfoComponent,
    WorkMethodologyComponent,
    OptionalComponent,
    ProjectsComponent,
    FooterMobileComponent,
    AnimationHomeComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule
  ],
  exports: [
    AppChimpanceComponent,
    MobileHomeComponent,
    NavbarMobileComponent,
    PricesComponent,
    InfoComponent,
    WorkMethodologyComponent,
    OptionalComponent,
    ProjectsComponent,
    FooterMobileComponent,
    AnimationHomeComponent
  ]
})
export class MobileModule { }
