import { Component } from '@angular/core';
import{TicketmasterApiService} from './services/ticketmaster-api.service'; 
import{IEvent} from './Interfaces/ticketmaster'; 
import { faSmile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  providers:[TicketmasterApiService]
})
export class AppComponent {
  showFavorites?: boolean;

  faSmile=faSmile; 

  FavoriteSelected(){
    this.showFavorites=true; 
  }
}
