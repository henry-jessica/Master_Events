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

  eventData?: IEvent;
  errorMessage:any; 

  constructor(private _ticketMasterService: TicketmasterApiService){
    } 
getEventDetail(eventLocate:string):boolean{
  this._ticketMasterService.getEventData(eventLocate).subscribe(
    eventData => {
      this.eventData=eventData; 
 
      console.log('Locate events on this place', this.eventData); 
    }, 
    error=> this.errorMessage = <any>error 
  ); 
return false; 

  }
}
