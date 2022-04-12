import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable, observable, throwError } from "rxjs";
import { IEvent } from "../Interfaces/ticketmaster";

@Injectable({
  providedIn: "root",
})
export class TicketmasterApiService {
  private _siteURL = "https://app.ticketmaster.com/discovery/v2/events?apikey=H0Ad7cDF4VcZCpeq15al1teT3YFzCWT8&city=";
  constructor(private _http: HttpClient) {}
  getEventData(city:string): Observable<IEvent> {
    return this._http
      .get<IEvent>(this._siteURL+city)
      .pipe(
        tap((data) => console.log("Eventdata/error") + JSON.stringify(data))
      );
  }
    eventsData?: Observable<IEvent>;
  private handleError(err:HttpErrorResponse){
    console.log('EventApiService: '+err.message); 
    return throwError("Error : "+err.message); 
  }
}
