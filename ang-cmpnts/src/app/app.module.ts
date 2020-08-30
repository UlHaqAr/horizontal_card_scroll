import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EventCard1Component } from './event-card1/event-card1.component';
import { EventCard2Component } from './event-card2/event-card2.component';
import { VertTimelineComponent } from './vert-timeline/vert-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCard1Component,
    EventCard2Component,
    VertTimelineComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
