import { Injectable } from '@angular/core';
import { User } from '../core.models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  constructor(private http: HttpClient) {}

  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user`)
      .pipe(tap((user: User) => (this.currentUser = user)));
  }
}
