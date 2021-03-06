import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './user-events/start.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class StartModule {}
