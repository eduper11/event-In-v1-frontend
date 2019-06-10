import { Component, OnInit } from '@angular/core';
import { MyEventsService } from 'src/app/core/services/myEvents.service';
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
    public myEventsService: MyEventsService,
    public createEventService: CreateEventService
  ) {}

  ngOnInit() {
    this.myEventsService.getMyEvents().subscribe();
  }

  getCurrentEvent(id: string) {
    this.myEventsService.getCurrentEvent(id).subscribe(() => {
      console.log(this.myEventsService);
      this.router.navigate(['/homepage']);
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
