import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterModalComponent } from './modal/register/register-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterModalComponent],
  imports: [CommonModule, RouterModule, SharedModule, ReactiveFormsModule],
  exports: [RegisterModalComponent]
})
export class LayoutModule {}
