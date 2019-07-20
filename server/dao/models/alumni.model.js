const mongoose = require("mongoose")

const Promise = require("bluebird")

mongoose.Promise = Promise

const SchemaObj = mongoose.Schema

const alumniSchema = new SchemaObj({

    alumniId: { type: String, unique: true, min: 3 },
    password: String,
    role: String

}, { strict: false })

alumniModel = mongoose.model('alumniLogin', alumniSchema)



module.exports = { alumniModel }