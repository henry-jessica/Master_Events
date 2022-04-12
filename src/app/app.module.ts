import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEventsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
