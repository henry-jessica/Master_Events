import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../../Interfaces/ticketmaster';
import { TicketmasterApiService } from '../../services/ticketmaster-api.service';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {
  eventData?: any; 
  eventsData?:any[]; 
  errorMessage:any; 

  @Input() location: string = ""; 

  ngOnInit(): void {
      this.getEventDetail(); 
  }
  constructor(private _ticketMasterService: TicketmasterApiService){
 } 

getEventDetail():boolean{
  this._ticketMasterService.getEventData(this.location).subscribe(
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
