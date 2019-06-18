import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LiveComponent } from 'src/app/shared/components/live/live.component';

const routes: Routes = [
  {
    path: '',
    component: LiveComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class LiveModule {}
