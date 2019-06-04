import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: './features/welcome/welcome.module#WelcomeModule'
  },
  {
    path: '',
    component: GeneralLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'activation',
        loadChildren: './features/activation/activation.module#ActivationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
