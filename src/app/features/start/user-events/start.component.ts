import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/services/events.service';
import { CreateEventService } from 'src/app/core/services/create-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  createOpened = false;
  joinOpened = false;
  myEventsOpened = true;

  constructor(
    private router: Router,
    public eventsService: EventsService,
    public createEventService: CreateEventService
  ) {}

  ngOnInit() {}

  getCurrentEvent(id: string) {
    this.eventsService.getCurrentEvent(id).subscribe(() => {
      console.log(this.eventsService);
      this.router.navigate(['/members', id]);
    });
  }

  openCreateEvent() {
    this.createOpened = true;
  }

  closeCreateEvent() {
    this.createOpened = false;
  }

  openJoinEvent() {
    this.joinOpened = true;
  }

  closeJoinEvent() {
    this.joinOpened = false;
  }
  openMyEvents() {
    this.myEventsOpened = true;
  }

  closeMyEvents() {
    this.myEventsOpened = false;
  }
}
