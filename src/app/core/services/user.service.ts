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
  currentEventUsers: User[];

  constructor(private http: HttpClient) {}

  //getUsers pide los users que pertenecen a ese evento en concreto

  getUsers(id) {
    return this.http
      .get(`${environment.apiBaseUrl}/event/users`, {
        params: {
          event_id: id
        }
      })
      .pipe(tap((users: User[]) => (this.currentEventUsers = users)));
  }

  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user`)
      .pipe(tap((user: User) => (this.currentUser = user)));
  }

  updateProfile(profile) {
    return this.http.put(`${environment.apiBaseUrl}/user`, profile).pipe(
      tap(() => {
        this.currentUser = {
          ...this.currentUser,
          ...profile
        };
      })
    );
  }

  uploadAvatar(image: File) {
    const formData = new FormData();

    formData.append('avatar', image);

    return this.http.post(`${environment.apiBaseUrl}/user/avatar`, formData, {
      observe: 'response'
    });
  }
}
