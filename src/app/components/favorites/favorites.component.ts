import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/Interfaces/ticketmaster';
import { TicketmasterApiService } from 'src/app/services/ticketmaster-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  eventsData?:IEvent[]; 

  constructor(private _eventsApiService:TicketmasterApiService) { } 

  ngOnInit(): void {
    this.getEventFavoriteDataTest(); 
  }

  getEventFavoriteDataTest(){
    this._eventsApiService.getEventFavoriteData().subscribe(eventsData =>
      { this.eventsData = eventsData }); 
  }

}
