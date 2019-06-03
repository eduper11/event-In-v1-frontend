import { Component, OnInit } from '@angular/core';
import { MailValidator } from '../../validators/mail.validator';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { RegisterModalService } from 'src/app/core/services/register-modal.service';

@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, MailValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    public registerModalService: RegisterModalService
  ) {}

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          this.userService.getUserProfile().subscribe();
          console.log(this.authService.login, this.userService);
          // this.router.navigate(['/event']);
        },
        () => this.loginForm.get('password').setValue('')
      );
    }
  }
}
