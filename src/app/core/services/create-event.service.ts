import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {
  opened = false;

  constructor(private http: HttpClient) {}

  createEvent({ name, company, finish_at }) {
    return this.http.post(`${environment.apiBaseUrl}/event`, {
      name,
      company,
      finish_at
    });
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}
