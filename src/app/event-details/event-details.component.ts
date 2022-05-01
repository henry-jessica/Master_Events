import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../Interfaces/ticketmaster';
import { ActivatedRoute } from '@angular/router';
import { TicketmasterApiService } from '../services/ticketmaster-api.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  // constructor(private _ticketMasterService: TicketmasterApiService, private route:ActivatedRoute){
  //   this.route.params
  //   .subscribe(params=>console.log(params)); 
  // }


@Input()eventSelected?:IEvent; 
  ngOnInit(): void {
    //this.getEvent(); 
  }
  // getEvent(): void {
  //   let id = +this._ActivatedRoute?.snapshot?.paramMap?.get('id') 
  //   this._ticketService.getEvent(id)
  //     .subscribe(event => this.event = event);
  // }
}
