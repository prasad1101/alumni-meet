import { Component, OnInit } from '@angular/core';
import { DalService } from 'src/app/myMeet/services/dal.service';
import Swal from 'sweetalert2';
import { ValidationsService } from 'src/app/myMeet/services/validations.service';


@Component({
  selector: 'app-stud-book-apt',
  templateUrl: './stud-book-apt.component.html',
  styleUrls: ['./stud-book-apt.component.css']
})
export class StudBookAptComponent implements OnInit {
  count = 0
  constructor(private dal: DalService, private validation: ValidationsService) { }


  ngOnInit() {
    this.getTodayDate()
    this.dal.getMyPrevAppointments(this.getUserId()).subscribe(x => {
      this.count = x.length
      console.log(x, this.count)
    })
  }
  today: any
  maxDate: any
  getTodayDate() {
    this.today = new Date()
    this.today = this.getFormattedDate(this.today)
    this.maxDate = new Date()
    this.maxDate = this.getFormattedDate(new Date(this.maxDate.setDate(this.maxDate.getDay() + 10)))
    console.log("todays formatted date>>>", this.today)
    console.log("maxDate formatted>>>", this.maxDate)
  }

  getFormattedDate(d) {

    var month = this.format(d.getMonth() + 1);
    var day = this.format(d.getDate());
    var year = this.format(d.getFullYear());


    return year + "-" + month + "-" + day;
  }

  format(d) {
    if (!isNaN(d)) {
      if (d <= 9) {
        return '0' + d
      }
    }
    return d;
  }

  getUserId() {
    let u = localStorage.getItem("user")
    try {
      u = JSON.parse(u)
      u = JSON.parse(u)
    } catch (error) {

    }
    if (u) return u["studentId"]; else return null

  }

  slot = ""

  aptReq = {
    studentId: this.getUserId(),
    alumniId: "",
    fromD: null,
    to: null,
    from: null
  }

  aptStatus: any

  aptVal() {
    this.aptStatus = null
    if (this.validation.emptyVal(this.aptReq.alumniId)) {
      Swal.fire('Please enter Alumni Id!', '', 'error')
      this.aptStatus = "Please enter Alumni Id!";

    } else
      if (this.validation.emptyVal(this.aptReq.fromD)) {
        Swal.fire('Please Select valid Date!', '', 'error')
        this.aptStatus = "Please Select valid Date!";
      } else {
        if (this.validation.emptyVal(this.slot)) {
          Swal.fire('Please Select valid Appointment Slot!', '', 'error')
          this.aptStatus = "Please select valid Appointment Slot!";
        }
      }
    return this.aptStatus
  }

  makeAptRequest() {
    if (null != this.aptVal()) {
      if (this.count >= 2) {
        Swal.fire("You have exceeded 2 appointment limit", "Cannot create an appointment", "error")
        return
      }
      return
    }



    let [fromT, toT] = this.slot.split("-");
    this.aptReq.from = new Date(new Date(this.aptReq.fromD).setHours(Number(fromT))).toLocaleString()
    this.aptReq.to = new Date(new Date(this.aptReq.fromD).setHours(Number(toT))).toLocaleString()
    console.log(this.aptReq, this.slot)

    this.dal.createApt(this.aptReq).subscribe(r => {
      console.log(r)
      if (r.error) {
        Swal.fire(`Cannot create appointment`,
          r.error, 'error')
      } else {

        Swal.fire(`Created an appointment ${r.appointmentId}`,
          `Please note that, appointment is not yet approved by alumni`, 'success')
      }
    }, e => {
      alert(e)
    })
  }

}
