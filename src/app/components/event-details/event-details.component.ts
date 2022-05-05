import { Component, Input, OnInit } from '@angular/core';
import { IEvent, IVenue2 } from '../../Interfaces/ticketmaster';
import { ActivatedRoute } from '@angular/router';
import { TicketmasterApiService } from '../../services/ticketmaster-api.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  id?:string;
  eventData?:IEvent; 
  constructor(private _ticketMasterService: TicketmasterApiService, private route:ActivatedRoute){
    this.route.params
    .subscribe(params=>console.log(params)); 

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getEvent(); 
  }
  getEvent():boolean{
    this._ticketMasterService.getEvent(this.id).subscribe(
      eventData => {
        this.eventData=eventData; 
        this.eventData = this.eventData;   
      }, 
      // error=> this.errorMessage = <any>error 
    ); 
    return false; 
    }

}
