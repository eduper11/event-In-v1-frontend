import { AuthInfo } from '../core.models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authInfo: AuthInfo;

  constructor(private http: HttpClient, private router: Router) {
    this.authInfo = JSON.parse(localStorage.getItem('auth'));
  }

  login({ email, password }) {
    return this.http
      .post(`${environment.apiBaseUrl}/account/login`, { email, password })
      .pipe(
        tap((info: AuthInfo) => {
          this.authInfo = info;
          localStorage.setItem('auth', JSON.stringify(info));
        })
      );
  }
  register({ full_name, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      full_name,
      email,
      password
    });
  }

  logout() {
    localStorage.removeItem('auth');
    this.authInfo = null;
    this.router.navigate(['/welcome']);
    // location.href = '/welcome'; -> Asegura borrado de datos de los servicios
  }
}
