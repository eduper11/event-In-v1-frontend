import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyEventsService {
  events: Event[];
  currentEvent: Event;

  constructor(private http: HttpClient) {}

  getMyEvents() {
    return this.http.get(`${environment.apiBaseUrl}/myevents`).pipe(
      tap((events: Event[]) => {
        this.events = events;
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
          this.currentEvent = event;
        })
      );
  }
}
