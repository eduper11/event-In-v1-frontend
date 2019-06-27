import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.scss']
})
export class MyEventsComponent implements OnInit {
  constructor(private router: Router, public eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getMyEvents().subscribe();
  }

  getCurrentEvent(id: string) {
    this.eventsService.getCurrentEvent(id).subscribe(() => {
      console.log(this.eventsService);
      this.router.navigate(['/members', id]);
    });
  }
}
