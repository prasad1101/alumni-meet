import { Component, OnInit } from '@angular/core';
import { DalService } from 'src/app/myMeet/services/dal.service';

@Component({
  selector: 'app-alumni-dash',
  templateUrl: './alumni-dash.component.html',
  styleUrls: ['./alumni-dash.component.css']
})
export class AlumniDashComponent implements OnInit {

  userId: any

  getUserId() {
    let u = localStorage.getItem("user")
    try {
      u = JSON.parse(u)
      u = JSON.parse(u)
    } catch (error) {

    }
    if (u) {
      this.userId = u["alumniId"]
      console.log("userId>>", this.userId)
    } else return null

  }


  constructor(private dal: DalService) { }

  ngOnInit() {
    this.getUserId()
    this.getApt()
  }

  getApt() {
    this.dal.getAluAppointments(this.userId).subscribe(r => {
      this.dashboardSummary.totalApt = r.length
      this.dashboardSummary.approvedApt = r.filter(x => x.isApproved).length
      this.dashboardSummary.rejectedApt = this.dashboardSummary.totalApt - this.dashboardSummary.approvedApt
      this.dashboardSummary.thisMonthApt = r.length
    })
  }


  dashboardSummary = {
    totalApt: 0,
    approvedApt: 0,
    rejectedApt: 0,
    thisMonthApt: 0
  }

}
