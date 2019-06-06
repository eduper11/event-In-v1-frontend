import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { MarkAsTouchedDirective } from './directives/mark-as-touched.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterModalComponent } from './components/register/register-modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

@NgModule({
  declarations: [
    LoginComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    RegisterModalComponent,
    NotFoundComponent,
    CreateEventComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoginComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    RegisterModalComponent,
    CreateEventComponent
  ]
})
export class SharedModule {}
