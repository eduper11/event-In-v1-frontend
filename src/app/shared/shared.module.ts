import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { MarkAsTouchedDirective } from './directives/mark-as-touched.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterModalComponent } from './components/register/register-modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    LoginComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    RegisterModalComponent,
    NotFoundComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoginComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    RegisterModalComponent
  ]
})
export class SharedModule {}
