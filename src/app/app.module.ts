import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MobileModule } from './features/views/mobile/mobile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrltopagePipe } from './core/pipe/urltopage.pipe';


import { HttpClientModule } from '@angular/common/http';


//lotie player
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { DragScrollModule } from 'ngx-drag-scroll';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './core/store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './core/store/effects';


// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}




@NgModule({
  declarations: [
    AppComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobileModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    DragScrollModule,

    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
