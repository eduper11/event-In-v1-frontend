import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateEventService } from 'src/app/core/services/create-event.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'sn-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})

/**
 * TODO
 * Crear un Validador de fechas
 */
export class CreateEventComponent {
  createEventForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    company: ['', [Validators.required, Validators.minLength(3)]],
    finish_at: ['', [Validators.required]]
  });

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    public createEventService: CreateEventService
  ) {}

  createEvent() {
    const { name, company, finish_at } = this.createEventForm.value;

    if (this.createEventForm.valid) {
      this.createEventService
        .createEvent({ name, company, finish_at })
        .subscribe(() => {
          this.createEventForm.reset();
          this.modalService.open(
            'Your event has been created!!',
            'Please go to your event list to join it like speaker or listener'
          );
        });
    }
  }
}
