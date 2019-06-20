import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { MarkAsTouchedDirective } from './directives/mark-as-touched.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterModalComponent } from './components/register/register-modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { MembersComponent } from './components/members/members.component';
import { LiveComponent } from './components/live/live.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ValidationEventComponent } from './components/validation-event/validation-event.component';
import { MyEventsComponent } from './components/myevents/myevents.component';
import { NotJoinedEventsComponent } from './components/not-joined-events/not-joined-events.component';
import { ChangeAvatarComponent } from './components/change-avatar/change-avatar.component';

@NgModule({
  declarations: [
    LoginComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    RegisterModalComponent,
    NotFoundComponent,
    CreateEventComponent,
    MembersComponent,
    LiveComponent,
    LoaderComponent,
    ValidationEventComponent,
    MyEventsComponent,
    NotJoinedEventsComponent,
    ChangeAvatarComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoginComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    RegisterModalComponent,
    CreateEventComponent,
    LoaderComponent,
    MembersComponent,
    LiveComponent,
    MyEventsComponent,
    NotJoinedEventsComponent,
    ChangeAvatarComponent
  ]
})
export class SharedModule {}
