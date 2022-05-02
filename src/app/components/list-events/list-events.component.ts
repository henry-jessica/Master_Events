import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/Interfaces/ticketmaster';
import { TicketmasterApiService } from 'src/app/services/ticketmaster-api.service';
// import { IEvent } from '../Interfaces/ticketmaster';
// import { TicketmasterApiService } from '../services/ticketmaster-api.service';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {
  @Input() eventsData?:IEvent[]
  @Input() favorites?:boolean; 

  ngOnInit(): void {
  }
  constructor(){
 }
}
