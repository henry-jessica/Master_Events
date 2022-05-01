import { Component } from '@angular/core';
import{TicketmasterApiService} from './services/ticketmaster-api.service'; 
import{IEvent} from './Interfaces/ticketmaster'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  providers:[TicketmasterApiService]
})
export class AppComponent {


  eventData?: any; 
  eventsData?:IEvent[]; 
  errorMessage:any; 
  
  constructor(private _eventAPIService: TicketmasterApiService) { }
  
  getEventDetail(location:string):boolean{
  this._eventAPIService.getEventData(location).subscribe(
    eventData => {
      this.eventData=eventData; 
      this.eventsData = this.eventData._embedded.events; 
      console.log('events', this.eventsData); 

      this.eventsData?.forEach(element => {
        console.log(element.name); 
      });
    }, 
    error=> this.errorMessage = <any>error 
  ); 
  return false; 
  }
  
}
