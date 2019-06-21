import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'sn-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  updateProfileForm = this.fb.group({
    full_name: ['', [Validators.required]],
    linkedin: ['', [Validators.nullValidator]],
    twitter: ['', [Validators.nullValidator]],
    github: ['', [Validators.nullValidator]],
    description: ['', [Validators.nullValidator]]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe(data => {
      this.updateProfileForm.setValue({
        full_name: this.userService.currentUser[0].full_name,
        linkedin: this.userService.currentUser[0].linkedin,
        twitter: this.userService.currentUser[0].twitter,
        github: this.userService.currentUser[0].github,
        description: this.userService.currentUser[0].description
      });
    });
  }

  updateProfile() {
    if (this.updateProfileForm.valid) {
      this.userService
        .updateProfile(this.updateProfileForm.value)
        .subscribe(() => {
          this.modalService.open(
            'Profile updated!!',
            'Now your event mates can learn more about you'
          );
        });
    }
  }
}
