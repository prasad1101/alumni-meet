import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './myMeet/com/landing-page/landing-page.component';
import { LoginComponent } from './myMeet/com/landing-page/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    /* resolve: { config: AppLoaderResolver }, */
    children: [

      {
        canActivate: [AuthGuard],
        path: 'stud', loadChildren: './myMeet/modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        canActivate: [AuthGuard],
        path: 'alumni', loadChildren: './myMeet/modules/alumni/alumni.module#AlumniModule'
      },
      {
        path: '', component: LoginComponent
      }

      /* { path: '**', redirectTo: '/' } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
