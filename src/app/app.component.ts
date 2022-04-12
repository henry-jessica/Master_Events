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

  show?: boolean; 
  location ?:string; 

  getEventDetail(location:string):boolean{
    this.show = true; 
    this.location = location; 
    console.log(this.show); 
    console.log(this.location); 
   return false; 
  }

}
