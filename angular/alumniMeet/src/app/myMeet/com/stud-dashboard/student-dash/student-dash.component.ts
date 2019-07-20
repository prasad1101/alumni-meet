import { Component, OnInit } from '@angular/core';
import { DalService } from 'src/app/myMeet/services/dal.service';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css']
})
export class StudentDashComponent implements OnInit {

  activeId = null;

  userId: any

  getUserId() {
    let u = localStorage.getItem("user")
    try {
      u = JSON.parse(u)
      u = JSON.parse(u)
    } catch (error) {

    }
    if (u) {
      this.userId = u["studentId"]

    } else return null

  }

  constructor(private dal: DalService) { }
  dashboardSummary = {
    totalApt: 0,
    approvedApt: 0,
    rejectedApt: 0,
    thisMonthApt: 0
  }
  user: any = {}
  notification: any
  ngOnInit() {
    this.getUserId()
    this.getApt()
  }

  getApt() {
    this.dal.getStuAppointments(this.userId).subscribe(r => {
      this.dashboardSummary.totalApt = r.length
      this.dashboardSummary.approvedApt = r.filter(x => x.isApproved).length
      this.dashboardSummary.rejectedApt = this.dashboardSummary.totalApt - this.dashboardSummary.approvedApt
      this.dashboardSummary.thisMonthApt = r.length

    })
  }


}
