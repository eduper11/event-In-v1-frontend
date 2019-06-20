import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/services/events.service';

@Component({
  selector: 'sn-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  currentEvent;
  constructor(public eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService
      .getCurrentEvent(this.eventsService.currentEvent.id)
      .subscribe();
  }
}
