import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MobileModule } from './features/views/mobile/mobile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrltopagePipe } from './core/pipe/urltopage.pipe';

import { LottieAnimationViewModule } from 'ng-lottie';
import { HttpClientModule } from '@angular/common/http';


//lotie player
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { DragScrollModule } from 'ngx-drag-scroll';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
