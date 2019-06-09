import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sn-validation-event',
  templateUrl: './validation-event.component.html',
  styleUrls: []
})
export class ValidationEventComponent {
  @Input() control: FormControl;
}
