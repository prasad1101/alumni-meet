const express = require("express")

const studentRouter = express.Router();

const dbFactory = require("../dao/conn-builder")

studentRouter.post("/login", (req, res) => {

    dbFactory.studentHelper.authorizeStudent(req.body, (response) => {

        res.json(response)
    })
})

studentRouter.get("/list", (req, res) => {

    dbFactory.studentHelper.readStudent(req.query, (result) => {

        res.json(result)
    })
})

studentRouter.delete("/delete", (req, res) => {

    dbFactory.studentHelper.deleteStudent(req.body.studentId, (result) => {

        res.json(result)
    })
})

studentRouter.put("/update", (req, res) => {
    dbFactory.studentHelper.updateStudent(req.query.studentId, req.body, (result) => {
        res.json(result)
    })
})

studentRouter.post("/register", (req, res) => {
    dbFactory.studentHelper.saveStudent(req.body, (result) => {
        res.json(result)
    })
})

module.exports = { studentRouter }