import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { MatchPasswordValidator } from 'src/app/shared/validators/match-password.validator';
import { RegisterModalService } from 'src/app/core/services/register-modal.service';

@Component({
  selector: 'sn-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent {
  registerForm = this.fb.group(
    {
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },
    { validators: MatchPasswordValidator }
  );

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: ModalService,
    public registerModalService: RegisterModalService
  ) {}

  register() {
    const { full_name, email, password } = this.registerForm.value;

    if (this.registerForm.valid) {
      this.authService
        .register({ full_name, email, password })
        .subscribe(() => {
          this.registerForm.reset();
          this.modalService.open(
            'Register complete!!',
            'Please go to your email and activate your account'
          );
        });
    }
  }
}
