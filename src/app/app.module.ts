import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MobileModule } from './features/views/mobile/mobile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CuotaspipePipe } from './core/pipe/cuotaspipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobileModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
