const mongoose = require("mongoose")

const Promise = require("bluebird")

mongoose.Promise = Promise

const SchemaObj = mongoose.Schema

const appointmentSchema = new SchemaObj({

    appointmentId: { type: String, unique: true, min: 3 },
    alumniId: { type: String, min: 3 },
    studentId: { type: String, min: 3 },
    from: Date,
    to: Date,
    isApproved: Boolean

}, { strict: false })

appointmentModel = mongoose.model('appointments', appointmentSchema)



module.exports = { appointmentModel }