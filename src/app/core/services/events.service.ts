import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router, ActivationEnd } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Event } from 'src/app/core/core.models';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: Event[];
  currentEvent: Event | {} = {};
  eventsNotJoined: Event[];

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.subscribe(event => {
      console.log(event);
      if (event instanceof ActivationEnd) {
        if (event.snapshot && event.snapshot.params.id) {
          this.currentEvent['id'] = event.snapshot.params.id;
        }
      }
    });
  }

  joinEvent(id, rol) {
    return this.http.post(`${environment.apiBaseUrl}/event/join`, {
      params: {
        event_id: id,
        rol
      }
    });
  }

  getEventsNotJoined() {
    return this.http.get(`${environment.apiBaseUrl}/events`).pipe(
      tap((eventsNotJoined: Event[]) => {
        this.eventsNotJoined = eventsNotJoined;
      })
    );
  }

  getMyEvents() {
    return this.http.get(`${environment.apiBaseUrl}/myevents`).pipe(
      tap((events: Event[]) => {
        this.events = events;
        console.log(this.events);
      })
    );
  }

  getCurrentEvent(id: string) {
    return this.http
      .get(`${environment.apiBaseUrl}/eventbyid`, {
        params: {
          event_id: id
        }
      })
      .pipe(
        tap((event: Event) => {
          this.currentEvent = event[0];
          console.log(this.currentEvent);
        })
      );
  }
}
