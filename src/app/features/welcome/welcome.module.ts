import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [WelcomeComponent, WelcomeFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    LayoutModule
  ]
})
export class WelcomeModule {}
