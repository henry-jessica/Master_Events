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
  btnName?: string="Add to Favorite";


  constructor(private route:ActivatedRoute,   private _eventApiService?: TicketmasterApiService){
    this.route.params
    .subscribe(params=>console.log(params)); 
  }

  @Input() event?:IEvent; 
  @Input() favorites?:boolean; 
  //eventData?:IEvent; 

  ngOnInit(): void {
    if(this.favorites)
    this.btnName="Remove"; 
  }
  AddOrRemove(event?:IEvent):boolean{
    if(this.favorites){
      this.DeleteFavorite(event); 
    }
    else{
      this.AddToFavorite(event); 
    }
    return false; 
  }

  AddToFavorite(event?:IEvent): boolean{
    let tempEvent:Event; 
    tempEvent = new Event(event); 
    this._eventApiService?.addEventData(tempEvent.event); 
    return false;  
  }
  DeleteFavorite(event?:IEvent):boolean{
    this._eventApiService?.delfavoriteData(event); 
    return false; 
  }


}



