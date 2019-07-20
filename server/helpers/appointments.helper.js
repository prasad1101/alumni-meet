const getAppointmentsModel = () => {
  return require("../dao/conn-builder")
    .modelBundle.appointmentsModel;
}

const readAppointment = (query, cb) => {
  console.log("###", query)
  getAppointmentsModel().find(query || {}, (me, md) => {
    cb(me || md)
  })
}

const appointmentsInWeek = (query, cb) => {

  date1 = new Date(query.from) //current date
  //go back on calender and get a new date
  date1 = new Date(date1.setDate(date1.getDay() - 7))

  date2 = new Date(query.to)
  //go ahead a week on calender and get a new date
  date2 = new Date(date2.setDate(date2.getDay() + 7))
  console.log(date1, date2)
  readAppointment({
    from: {
      $gte: new Date(getFormattedDate(date1))
    },
    to: {
      $lte: new Date(getFormattedDate(date2))
    }
  }, cb)
}
const getFormattedDate = (d) => {

  var month = format(d.getMonth() + 1);
  var day = format(d.getDate());
  var year = format(d.getFullYear());

  var h = format(d.getHours());
  var m = format(d.getMinutes())
  var s = format(d.getSeconds())
  return year + "-" + month + "-" + day + 'T' + `${h}:${m}:${s}Z`;
}

const format = (d) => {
  if (!isNaN(d)) {
    if (d <= 9) {
      return '0' + d
    }
  }
  return d;
}

const saveAppointment = (payload, cb) => {
  verifyUsers(payload, (res) => {
    if (res != false) {
      appointmentsInWeek(payload, (res) => {

        console.log("max appoinments=========>", res)

      })
      isSlotAvail(payload, (res) => {
        console.log("Slot avail ?", res)
        if (res === true) {
          payload.appointmentId = Math.floor(Math.random() * 16777215).toString(16).toUpperCase()
          payload.isApproved = false
          console.log("Saving appointment", payload)
          new (getAppointmentsModel())(payload).save((me, md) => {
            cb(me || md)
          })
        } else {
          cb({ error: 'Appointment already booked by someone' })
        }
      })
    } else {
      cb({ error: "Invalid student/alumni Id" })
    }
  })
}

const updateAppointment = (appointmentId, payload, cb) => {
  getAppointmentsModel().update(
    { appointmentId: appointmentId },
    payload,
    (me, md) => {
      cb(me || md)
    })
}

const deleteAppointment = (appointmentId, cb) => {
  getAppointmentsModel().remove(
    { appointmentId: appointmentId },
    (me, md) => {
      cb(me || md)
    })
}

const verifyUsers = (verifyPayload, cb) => {
  const { alumniHelper } = require("../dao/conn-builder");
  const { studentHelper } = require("../dao/conn-builder");

  studentHelper.readStudent({ studentId: verifyPayload.studentId },
    (res) => {
      if (res && res.length) {
        alumniHelper.readAlumni({ alumniId: verifyPayload.alumniId },
          (res) => {
            if (res && res.length) {
              cb(true)
            } else {
              cb(false)
            }
          })
      } else {
        cb(false)
      }
    })
}

const isSlotAvail = (slotPayload, cb) => {

  readAppointment({
    alumniId: slotPayload.alumniId,
    from: slotPayload.from,
    to: slotPayload.to,
    isApproved: true
  }, (res) => {
    console.log("slot fun says==========>>", res)
    if (res && res.length) {
      cb(false)
    } else {
      cb(true)
    }
  })

}




module.exports = {
  readAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
  verifyUsers
}