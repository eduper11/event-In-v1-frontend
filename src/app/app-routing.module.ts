import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

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
    children: [
      {
        path: 'activation',
        loadChildren: './features/activation/activation.module#ActivationModule'
      }
    ]
  },
  {
    path: '',
    component: GeneralLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'start',
        loadChildren: './features/start/start.module#StartModule'
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'homepage/:id',
        loadChildren: './features/home/home.module#HomeModule'
      },
      {
        path: 'events',
        loadChildren: './features/start/start.module#StartModule'
      },
      {
        path: 'live/:id',
        loadChildren: './features/live/live.module#LiveModule'
      },
      {
        path: 'members/:id',
        loadChildren: './features/members/members.module#MembersModule'
      },
      {
        path: 'profile',
        loadChildren: './features/profile/profile.module#ProfileModule'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
