import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from "../environments/environment";
import { AppComponent } from './app.component';
// import { ListEventsComponent } from './components/list-events/list-events.component';
import { EventComponent } from './components/event/event.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
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
