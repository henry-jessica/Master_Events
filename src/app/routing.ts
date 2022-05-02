import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { EventComponent } from './components/event/event.component';
import { HomeComponent } from './components/home/home.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
    { path: 'event/:id', component: EventDetailsComponent },
    { path: 'favorites/event/:id', component: EventDetailsComponent },
    { path: '', component: HomeComponent },
    { path: '#', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'about', component:AboutComponent}, 
    {path:'favorites', component:FavoritesComponent}
    
   ];

   @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
