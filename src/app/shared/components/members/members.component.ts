import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { EventsService } from 'src/app/core/services/events.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/core.models';

@Component({
  selector: 'sn-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  pathParam;
  private sub;

  constructor(private route: ActivatedRoute, public userService: UserService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.pathParam = params;
    });
    this.userService.getUsers(this.pathParam.id).subscribe();
  }
}
