import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/Interfaces/ticketmaster';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private route:ActivatedRoute){
    this.route.params
    .subscribe(params=>console.log(params)); 
  }

  @Input() event?:IEvent; 
  eventData?:IEvent; 

  ngOnInit(): void {

  }
  AddToFavorite(): boolean{

    return false;
  }

}



