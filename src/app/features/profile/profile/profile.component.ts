import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'sn-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  updateProfileForm = this.fb.group({
    fullName: ['', [Validators.required]],
    linkedIn: ['', [Validators.nullValidator]],
    twitter: ['', [Validators.nullValidator]],
    github: ['', [Validators.nullValidator]],
    description: []
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.updateProfileForm.setValue({
      fullName: this.userService.currentUser.full_name,
      linkedIn: this.userService.currentUser.linkedin,
      twitter: this.userService.currentUser.twitter,
      github: this.userService.currentUser.github,
      description: this.userService.currentUser.description
    });
  }

  updateProfile() {
    if (this.updateProfileForm.valid) {
      for (const prop of this.updateProfileForm.value.preferences) {
        if (!this.updateProfileForm.value.preferences[prop]) {
          this.updateProfileForm.value.preferences[prop] = '';
        }
      }
      this.userService.updateProfile(this.updateProfileForm.value).subscribe();
    }
  }
}