import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DalService } from 'src/app/myMeet/services/dal.service';
import { ValidationsService } from 'src/app/myMeet/services/validations.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private dal: DalService, private validation: ValidationsService) { }

  regRole = ""
  logRole = ""

  studLoginReq = {
    role: "",
    studentId: "",
    password: "",
  }

  alumniLoginReq = {
    role: "",
    alumniId: "",
    password: "",
  }
  studRegisterReq = {
    role: "",
    studentId: "",
    password: "",
    rePassword: ""
  }
  alumniRegisterReq = {
    role: "",
    alumniId: "",
    password: "",
    rePassword: ""
  }

  loginReq = {
    userId: "",
    password: "",
  }

  regReq = {
    userId: "",
    password: "",
    rePassword: ""
  }

  loginStatus: any;
  registerStatus: any;

  ngOnInit() {
    this.loginStatus = "We're glad to see you again!";
    this.registerStatus = "Let's create your account!";
    this.logRole = ""
    this.regRole = ""

  }




  chackedStud: any;
  chackedAlumni: any;


  loginVal() {
    this.loginStatus = null
    if (this.validation.emptyVal(this.loginReq.userId)) {

      this.loginStatus = "Please Enter User Id!";

    } else
      if (this.validation.emptyVal(this.loginReq.userId)) {
        this.loginStatus = "Please Enter Password!";
      } else {
        if (this.validation.emptyVal(this.logRole)) {
          this.loginStatus = "Please select valid role!";
        }
      }
    return this.loginStatus
  }

  registerVal() {
    this.registerStatus = null
    if (this.validation.emptyVal(this.regReq.userId)) {
      this.registerStatus = "Please enter user Id!";
    } else
      if (this.validation.emptyVal(this.regReq.password)) {
        this.registerStatus = "Please enter password!";
      } else {

        if (this.validation.emptyVal(this.regReq.rePassword)) {
          this.registerStatus = "Please Enter repeat Password!";
        } else {
          if (this.validation.emptyVal(this.regRole)) {
            this.registerStatus = "Please select role!";
          }
        }
      }
    return this.registerStatus
  }




  attemptLogin() {

    if (null != this.loginVal()) {
      return
    }

    if (this.logRole == "stud") {
      this.studLoginReq.role = this.logRole
      this.studLoginReq.studentId = this.loginReq.userId
      this.studLoginReq.password = this.loginReq.password
      console.log("stud log req>>>>>", this.studLoginReq)

      this.dal.loginStud(this.studLoginReq).subscribe(x => {
        console.log("login res>>>>>>>>>>", x)
        if (x.isSuccess == true) {

          console.log("Loggedin Successfully !!")

          localStorage.setItem("user", JSON.stringify(this.studLoginReq))

          window.location.href = `/alumniMeet/#/stud/dashboard`
        } else {
          Swal.fire(`Login Failed!`,
            ``, 'error')
          console.log("Login Failed !!")

        }

      }, e => {
        Swal.fire(`${e}!`,
          ``, 'error')
      })
    } else {
      if (this.logRole == "alumni") {
        this.alumniLoginReq.role = this.logRole
        this.alumniLoginReq.alumniId = this.loginReq.userId
        this.alumniLoginReq.password = this.loginReq.password
        console.log("alumni log req>>>>", this.alumniLoginReq)
        this.dal.loginAlumni(this.alumniLoginReq).subscribe(x => {
          console.log(x)
          if (x.isSuccess == true) {

            console.log("Loggedin Successfully !!")

            localStorage.setItem("user", JSON.stringify(this.alumniLoginReq))

            window.location.href = `/alumniMeet/#/alumni/dashboard`
          } else {
            Swal.fire(`Login Failed!`,
              ``, 'error')
            console.log("Login Failed !!")
          }

        }, e => {
          Swal.fire(`${e}!`,
            ``, 'error')
        })
      }
    }
  }

  attemptRegister() {

    if (null != this.registerVal()) {
      return
    }

    if (this.regRole == "stud") {
      this.studRegisterReq.role = this.regRole
      this.studRegisterReq.studentId = this.regReq.userId
      this.studRegisterReq.password = this.regReq.password
      console.log("stud reg req>>>>", this.studRegisterReq)
      this.dal.registerStud(this.studRegisterReq).subscribe(y => {

        console.log(y);
        if (y._id) {
          console.log("User Registered Successfully!!")
          this.registerStatus = "User Registered Successfully !!";
          Swal.fire(`Registration Successful!`,
            `Please go to login!`, 'success')

        } else if (y.code == 11000) {

          console.log("User already exist !!")
          this.registerStatus = "User already exist!!";
          Swal.fire(`UserId already exist!`,
            `try another Username!`, 'error')


        } else {
          Swal.fire(`User registration Failed!`,
            `try again!`, 'error')
          this.registerStatus = "User registration Failed !!";
        }
      })
    } else {
      if (this.regRole == "alumni") {
        this.alumniRegisterReq.role = this.regRole
        this.alumniRegisterReq.alumniId = this.regReq.userId
        this.alumniRegisterReq.password = this.regReq.password
        console.log("alumni reg req>>>>", this.alumniRegisterReq)
        this.dal.registerAlumni(this.alumniRegisterReq).subscribe(y => {

          console.log(y);
          if (y._id) {
            console.log("User Registered Successfully!!")
            Swal.fire(`Registration Successful!`,
              `Please go to login!`, 'success')
            this.registerStatus = "User Registered Successfully !!";
            // window.location.href = `/${environment.baseHref}/#/dashboard`
          } else if (y.code == 11000) {

            console.log("User already exist !!")
            Swal.fire(`UserId already exist!`,
              `try another Username!`, 'error')
            this.registerStatus = "User already exist !! try another Username";

          } else {
            Swal.fire(`User registration Failed!`,
              `try again!`, 'error')
            this.registerStatus = "User registration Failed !!";

          }
        })
      }
    }


  }


}
