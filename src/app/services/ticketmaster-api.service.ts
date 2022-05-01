import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable, observable, throwError } from "rxjs";
import { IEvent } from "../Interfaces/ticketmaster";

@Injectable({
  providedIn: "root",
})
export class TicketmasterApiService {
  private _siteURL = "https://app.ticketmaster.com/";
  private _search = "discovery/v2/events?apikey=H0Ad7cDF4VcZCpeq15al1teT3YFzCWT8&keyword="; 
  constructor(private _http: HttpClient) {}

  getEventData(keyword:string): Observable<IEvent> {
    return this._http.get<IEvent>(this._siteURL+this._search+keyword)
    .pipe(
      tap(data => console.log('Event/error' + JSON.stringify(data))),
      catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    console.log('EventMaster' + err.message); 
    return throwError("error : " + err.message); 
  }  
}
