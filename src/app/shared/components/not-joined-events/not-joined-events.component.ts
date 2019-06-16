import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-not-joined-events',
  templateUrl: './not-joined-events.component.html',
  styleUrls: ['./not-joined-events.component.scss']
})
export class NotJoinedEventsComponent implements OnInit {
  constructor(public eventsService: EventsService, private router: Router) {}

  ngOnInit() {
    this.eventsService.getEventsNotJoined().subscribe();
  }

  joinEvent(id, rol) {
    this.eventsService.joinEvent(id, rol).subscribe();
  }

  getCurrentEvent(id: string) {
    this.eventsService.getCurrentEvent(id).subscribe(() => {
      console.log(this.eventsService);
      this.router.navigate([`/homepage/:${id}`]);
    });
  }
}
