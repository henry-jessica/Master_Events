
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"; 
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IEmbedded, IEvent } from "../Interfaces/ticketmaster";
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class TicketmasterApiService {
  private _siteURL = "https://app.ticketmaster.com/discovery/v2/";
  private _apiKey = "H0Ad7cDF4VcZCpeq15al1teT3YFzCWT8"; 
  private _search = "&keyword="; 
  constructor(private _http: HttpClient){
  }


  getEventsData(keyword:string|undefined): Observable<IEvent> {
    return this._http.get<IEvent>(this._siteURL+"events"+"?apikey="+this._apiKey+this._search+keyword)
    .pipe(
      tap(),
      catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    console.log('Error' + err.message); 
    return throwError("error : " + err.message); 
  } 
  
  getEvent(id: string): Observable<IEvent> {
    return this._http.get<IEvent>(this._siteURL+"events/"+id+"?apikey="+this._apiKey+this._search); 
  }

}
