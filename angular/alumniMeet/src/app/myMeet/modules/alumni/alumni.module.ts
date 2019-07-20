import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { AlumniAptComponent } from '../../com/alumni-dashboard/alumni-apt/alumni-apt.component';
import { AlumniDashLayoutComponent } from '../../com/alumni-dashboard/alumni-dash-layout/alumni-dash-layout.component';
import { AlumniDashComponent } from '../../com/alumni-dashboard/alumni-dash/alumni-dash.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlumniAptComponent,
    AlumniDashComponent,
    AlumniDashLayoutComponent
  ],
  imports: [
    CommonModule,
    AlumniRoutingModule,
    FormsModule
  ]
})
export class AlumniModule { }
