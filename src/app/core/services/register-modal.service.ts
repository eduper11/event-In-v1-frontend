import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterModalService {
  opened = false;

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}
