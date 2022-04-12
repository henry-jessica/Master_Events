import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from "../environments/environment";
import { AppComponent } from './app.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { EventComponent } from './event/event.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ListEventsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
