import { Component, OnInit } from '@angular/core';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  showFavorites?: boolean;
  faSmile=faSmile; 
  faStar=faStar; 
  

  FavoriteSelected(){
    this.showFavorites=true; 
  }

  ngOnInit(): void {
  }

}
