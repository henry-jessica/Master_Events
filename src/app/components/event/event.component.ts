import { Component, Input, OnInit } from '@angular/core';
import { IEvent, Event} from 'src/app/Interfaces/ticketmaster';
import { ActivatedRoute } from '@angular/router';
import { TicketmasterApiService } from 'src/app/services/ticketmaster-api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {


  constructor(private route:ActivatedRoute,   private _eventApiService?: TicketmasterApiService){
    this.route.params
    .subscribe(params=>console.log(params)); 
  }

  @Input() event?:IEvent; 
  //eventData?:IEvent; 

  ngOnInit(): void {
    console.log('event', this.event?.name); 
  }
  AddToFavorite(event?:IEvent): boolean{
    let tempEvent:Event; 
    tempEvent = new Event(event); 
    this._eventApiService?.addEventData(tempEvent.event); 
    console.log('temEvent', tempEvent.event); 
    return false;  
  }

}



