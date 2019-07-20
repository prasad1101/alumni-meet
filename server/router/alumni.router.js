const express = require("express")

const alumniRouter = express.Router();

const dbFactory = require("../dao/conn-builder")

alumniRouter.post("/login", (req, res) => {

    dbFactory.alumniHelper.authorizeAlumni(req.body, (response) => {

        res.json(response)
    })
})


alumniRouter.get("/list", (req, res) => {

    dbFactory.alumniHelper.readAlumni(req.query, (result) => {

        res.json(result)
    })
})

alumniRouter.delete("/delete", (req, res) => {

    dbFactory.alumniHelper.deleteAlumni(req.body.alumniId, (result) => {

        res.json(result)
    })
})

alumniRouter.put("/update", (req, res) => {
    dbFactory.alumniHelper.updateAlumni(req.query.alumniId, req.body, (result) => {
        res.json(result)
    })
})

alumniRouter.post("/register", (req, res) => {
    dbFactory.alumniHelper.saveAlumni(req.body, (result) => {
        res.json(result)
    })
})

module.exports = { alumniRouter }