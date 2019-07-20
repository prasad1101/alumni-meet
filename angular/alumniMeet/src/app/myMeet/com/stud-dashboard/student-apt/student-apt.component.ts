import { Component, OnInit } from '@angular/core';
import { DalService } from '../../../services/dal.service';


@Component({
  selector: 'app-student-apt',
  templateUrl: './student-apt.component.html',
  styleUrls: ['./student-apt.component.css']
})
export class StudentAptComponent implements OnInit {

  getUserId() {
    let u = localStorage.getItem("user")
    try {
      u = JSON.parse(u)
      u = JSON.parse(u)
    } catch (error) {

    }
    if (u) return u["studentId"]; else return null

  }

  constructor(private dal: DalService) { }
  appointments: any;
  ngOnInit() {
    this.getApt()
  }

  apt = {
    approved: 0,
    rejected: 0,
    total: 0
  }

  getApt() {
    this.dal.getStuAppointments(this.getUserId()).subscribe(r => {
      console.log("appointments>>>>>>", r)
      this.appointments = r
      this.apt.total = r.length
      this.apt.approved = r.filter(x => x.isApproved).length
      this.apt.rejected = this.apt.total - this.apt.approved
    })
  }

}
