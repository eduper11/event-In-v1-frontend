import { Component } from '@angular/core';
import { EventsService } from '../../core/services/events.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'sn-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(
    public eventService: EventsService,
    public authService: AuthService
  ) {}
}
