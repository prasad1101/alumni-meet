import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StudentAptComponent } from '../../com/stud-dashboard/student-apt/student-apt.component';
import { StudDashLayoutComponent } from '../../com/stud-dashboard/stud-dash-layout/stud-dash-layout.component';
import { StudentDashComponent } from '../../com/stud-dashboard/student-dash/student-dash.component';
import { StudBookAptComponent } from '../../com/stud-dashboard/stud-book-apt/stud-book-apt.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentDashComponent,
    StudentAptComponent,
    StudDashLayoutComponent,
    StudBookAptComponent



  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
