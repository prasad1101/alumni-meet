import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumniDashLayoutComponent } from '../../com/alumni-dashboard/alumni-dash-layout/alumni-dash-layout.component';
import { AlumniDashComponent } from '../../com/alumni-dashboard/alumni-dash/alumni-dash.component';
import { AlumniAptComponent } from '../../com/alumni-dashboard/alumni-apt/alumni-apt.component';

const routes: Routes = [
  {
    path: '', component: AlumniDashLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: AlumniDashComponent },
      { path: 'apt', component: AlumniAptComponent },


      { path: '**', redirectTo: '/dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
