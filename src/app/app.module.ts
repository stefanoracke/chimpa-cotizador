import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MobileModule } from './features/views/mobile/mobile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrltopagePipe } from './core/pipe/urltopage.pipe';

import { LottieAnimationViewModule } from 'ng-lottie';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobileModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
