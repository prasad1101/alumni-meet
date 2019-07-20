const mongoose = require("mongoose")

const Promise = require("bluebird")

mongoose.Promise = Promise

const SchemaObj = mongoose.Schema

const studentSchema = new SchemaObj({

    studentId: { type: String, unique: true, min: 3 },
    password: String,
    role: String

}, { strict: false })

studentModel = mongoose.model('studentLogin', studentSchema)



module.exports = { studentModel }