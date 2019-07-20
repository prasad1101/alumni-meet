import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DalService {


  constructor(private customHttp: CustomHttpService) { }


  loginStud(payload) {
    return this.customHttp.postReq(`${environment.serverURL}/student/login`, payload)
  }

  getMyPrevAppointments(studentId) {
    return this.customHttp.getReq(`${environment.serverURL}/appointment/my`, { studentId })
  }
  loginAlumni(payload) {
    return this.customHttp.postReq(`${environment.serverURL}/alumni/login`, payload)
  }

  registerStud(payload) {
    return this.customHttp.postReq(`${environment.serverURL}/student/register`, payload)
  }

  registerAlumni(payload) {
    return this.customHttp.postReq(`${environment.serverURL}/alumni/register`, payload)
  }

  getStuAppointments(studentId) {
    return this.customHttp.getReq(`${environment.serverURL}/appointment/list`, { studentId })
  }

  getAluAppointments(alumniId) {
    return this.customHttp.getReq(`${environment.serverURL}/appointment/list`, { alumniId })
  }

  changeAptStatus(payload, appointmentId) {
    return this.customHttp.putReq(`${environment.serverURL}/appointment/update`, payload, { appointmentId })
  }

  createApt(payload) {
    return this.customHttp.postReq(`${environment.serverURL}/appointment/create`, payload)
  }

}
