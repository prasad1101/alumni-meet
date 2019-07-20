const config = require("./config/main.config.json")
const express = require('express')
const app = express()
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const allowCrossDomain = (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'x-access-token');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}
app.use(allowCrossDomain)


app.get("/", (req, res) => res.send(`${config.serverName} is up.....`))

// student API
app.use("/student", require("./router/student.router").studentRouter)

// Alumni API
app.use("/alumni", require("./router/alumni.router").alumniRouter)

// appointment API
app.use("/appointment", require("./router/appointment.router").appointmentRouter)

app.listen(config.port, (a) => {
    console.log(`${config.serverName} is running on port : ${config.port} !!`)
})