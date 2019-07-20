const config = require("../config/main.config.json")

const mongoose = require("mongoose")


console.log(config)

mongoose.set("debug", config.isDebugMode || false)

mongoose.connect(config.mongoURL)

mongoose.connection.on("connected", () => {

    console.log("Mongoose connection is open", config.mongoURL)

})

mongoose.connection.on("error", (err) => {

    console.log("Mongoose connection is failed to", config.mongoURL, err)

})


mongoose.connection.on("disconnected", () => {

    console.log("Mongoose connection is disconnected to", config.mongoURL)

})


process.on("SIGINT", () => {

    mongoose.connection.close(() => {

        console.log("process termination asked us to close connection to", config.mongoURL)

        process.exit(0)

    })

})

const modelBundle = require("./models/model.bundle")
const alumniHelper = require("../helpers/alumni.helper")
const studentHelper = require("../helpers/student.helper")
const appointmentsHelper = require("../helpers/appointments.helper")


module.exports = {
    modelBundle,
    alumniHelper,
    studentHelper,
    appointmentsHelper
};