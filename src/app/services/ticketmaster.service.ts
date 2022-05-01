import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { TicketmasterApiService } from './ticketmaster-api.service';

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private eventSr: TicketmasterApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventSr.getEventsData(route.params['id']);
    }
}
