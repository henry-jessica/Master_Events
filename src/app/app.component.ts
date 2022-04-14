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
  title = 'Master_Events';

  eventData?: any; 
  eventsData?:any[]; 
  errorMessage:any; 

  constructor(private _ticketMasterService: TicketmasterApiService){
    } 
getEventDetail(eventLocate:string):boolean{
  this._ticketMasterService.getEventData(eventLocate).subscribe(
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
