import { Component, OnInit } from '@angular/core';
import { MyEventsService } from 'src/app/core/services/myEvents.service';

@Component({
  selector: 'sn-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  constructor(public myEventsService: MyEventsService) {}

  ngOnInit() {
    this.myEventsService.getMyEvents().subscribe();
  }
}
