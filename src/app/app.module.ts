import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from "../environments/environment";
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { SearchComponent } from './components/search/search.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './routing';
import { AboutComponent } from './components/about/about.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent,
    EventComponent, 
    ListEventsComponent, SearchComponent, EventDetailsComponent, HomeComponent, AboutComponent, FavoritesComponent, 
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule, 
    AppRoutingModule, 
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
