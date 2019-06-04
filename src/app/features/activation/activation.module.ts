import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivationComponent } from './activation/activation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ActivationComponent
  }
];

@NgModule({
  declarations: [ActivationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ActivationModule {}
