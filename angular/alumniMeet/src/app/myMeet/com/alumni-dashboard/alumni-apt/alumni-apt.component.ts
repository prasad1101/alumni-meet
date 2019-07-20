import { Component, OnInit } from '@angular/core';
import { DalService } from 'src/app/myMeet/services/dal.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-alumni-apt',
  templateUrl: './alumni-apt.component.html',
  styleUrls: ['./alumni-apt.component.css']
})
export class AlumniAptComponent implements OnInit {

  getUserId() {
    let u = localStorage.getItem("user")
    try {
      u = JSON.parse(u)
      u = JSON.parse(u)
    } catch (error) {

    }
    if (u) return u["alumniId"]; else return null

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
    this.dal.getAluAppointments(this.getUserId()).subscribe(r => {
      console.log("appointments>>>>>>", r)
      this.appointments = r
      this.apt.total = r.length
      this.apt.approved = r.filter(x => x.isApproved).length
      this.apt.rejected = this.apt.total - this.apt.approved
    })
  }

  approveApt(apt) {
    Swal.fire(
      {
        title: 'Are you sure?',
        text: "This will change Appointment status to Approved!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Approve it!',
        cancelButtonText: 'No, cancel!'
      }
    ).then(o => {
      console.log(o)
      if (o.value === true) {

        this.dal.changeAptStatus({
          isApproved: true
        }, apt.appointmentId).subscribe(x => {
          this.getApt()
        })
      }
    })

  }

  rejectApt(apt) {
    Swal.fire(
      {
        title: 'Are you sure?',
        text: "This will change Appointment status to Pending!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, do it!',
        cancelButtonText: 'No, cancel!'
      }
    ).then(o => {
      console.log(o)
      if (o.value === true) {

        this.dal.changeAptStatus({
          isApproved: false
        }, apt.appointmentId).subscribe(x => {
          this.getApt()
        })
      }
    })
  }



}
