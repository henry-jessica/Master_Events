import { Component, OnInit, Output } from '@angular/core';
import { IEvent } from 'src/app/Interfaces/ticketmaster';
import { TicketmasterApiService } from 'src/app/services/ticketmaster-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  eventData?: any; 
  eventsData?:IEvent[]; 
  eventsFavoriteData?:IEvent[]; 
  errorMessage:any; 

  ngOnInit(): void {
    this.getEventDetail("Sligo"); 
  }
  constructor(private _ticketMasterService: TicketmasterApiService){
 }
  getEventDetail(keyword:string):boolean{
    this._ticketMasterService.getEventsData(keyword).subscribe(
      eventData => {
        this.eventData=eventData; 
        this.eventsData = this.eventData._embedded.events;   
        this.eventsData?.forEach(element => {
          console.log(element); 
        });
      }, 
      error=> this.errorMessage = <any>error 
    ); 
    return false; 
    }

    // getEventFavoriteData(){
    //   this._ticketMasterService.getEventFavoriteData().subscribe(eventsFavoriteData =>
    //     { this.eventsFavoriteData = eventsFavoriteData }); 
    //     console.log(this.eventsFavoriteData); 
    // }
}
