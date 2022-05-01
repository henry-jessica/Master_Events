import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/Interfaces/ticketmaster';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  @Input() event?:IEvent; 

  ngOnInit(): void {
  }

}
