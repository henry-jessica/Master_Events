import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { IEmbedded, IEvent } from '../Interfaces/ticketmaster'
import { ActivatedRoute } from '@angular/router'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root',
})
export class TicketmasterApiService {
  private _siteURL = 'https://app.ticketmaster.com/discovery/v2/'
  private _apiKey = 'H0Ad7cDF4VcZCpeq15al1teT3YFzCWT8'
  private _search = '&keyword='

  eventsDataCollection!: AngularFirestoreCollection<IEvent>

  //representation of any set of events over any amount of time
  eventsData?: Observable<IEvent[]>

  //array to hold all events
  allEventsData!: IEvent[]

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    //Conect to the database
    this.eventsDataCollection = _afs.collection<IEvent>('favorite-event-data')
  }
  getEventsData(keyword: string | undefined): Observable<IEvent> {
    return this._http
      .get<IEvent>(
        this._siteURL +
          'events' +
          '?apikey=' +
          this._apiKey +
          this._search +
          keyword,
      )
      .pipe(tap(), catchError(this.handleError))
  }
  private handleError(err: HttpErrorResponse) {
    return throwError('error : ' + err.message)
  }

  // Get Events From API
  getEvent(id: string | undefined): Observable<IEvent> {
    return this._http.get<IEvent>(
      this._siteURL + 'events/' + id + '?apikey=' + this._apiKey,
    )
  }

  //Get List of Favorite Events
  getEventFavoriteData(): Observable<IEvent[]> {
    this.eventsData = this.eventsDataCollection.valueChanges({
      idField: 'collectionId',
    })
    this.eventsData.subscribe((data) =>
      console.log('getEventsData' + JSON.stringify(data)),
    )
    return this.eventsData
  }

  addEventData(event: any): void {
    this.eventsDataCollection.add(JSON.parse(JSON.stringify(event)))
  }

  delfavoriteData(event?: any): void {
    this.eventsDataCollection.doc(event?.collectionId).delete()
  }
}
