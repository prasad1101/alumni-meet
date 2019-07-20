const express = require("express")

const appointmentRouter = express.Router();

const dbFactory = require("../dao/conn-builder")

appointmentRouter.get("/list", (req, res) => {

    dbFactory.appointmentsHelper.readAppointment(req.query, (result) => {

        res.json(result)
    })
})


appointmentRouter.get("/my", (req, res) => {
    let d = new Date();
    let d2 = new Date(d.setDate(d.getDay() - 7))

    dbFactory.appointmentsHelper.readAppointment(
        {
            from:
            {
                $gte: new Date(d2.getFullYear(), d2.getMonth() + 1, d2.getDay())
            },
            studentId: req.query.studentId
        }, (result) => {

            res.json(result)
        })
})

appointmentRouter.delete("/delete", (req, res) => {

    dbFactory.appointmentsHelper.deleteAppointment(req.body.appointmentId, (result) => {

        res.json(result)
    })
})

appointmentRouter.put("/update", (req, res) => {
    dbFactory.appointmentsHelper.updateAppointment(req.query.appointmentId, req.body, (result) => {
        res.json(result)
    })
})

appointmentRouter.post("/create", (req, res) => {

    dbFactory.appointmentsHelper.saveAppointment(req.body, (result) => {

        console.log("appoinment router says =======>", result)
        res.json(result)
    })
})


module.exports = { appointmentRouter }