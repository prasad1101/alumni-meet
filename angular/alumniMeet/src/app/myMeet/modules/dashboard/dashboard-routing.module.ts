import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashComponent } from '../../com/stud-dashboard/student-dash/student-dash.component';
import { StudDashLayoutComponent } from '../../com/stud-dashboard/stud-dash-layout/stud-dash-layout.component';
import { StudentAptComponent } from '../../com/stud-dashboard/student-apt/student-apt.component';
import { StudBookAptComponent } from '../../com/stud-dashboard/stud-book-apt/stud-book-apt.component';


const routes: Routes = [
  {
    path: '', component: StudDashLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: StudentDashComponent },
      { path: 'apt', component: StudentAptComponent },
      { path: 'book-apt', component: StudBookAptComponent },


      { path: '**', redirectTo: '/dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
