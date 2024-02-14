const express = require("express")
const session = require('express-session')
const app = express()

app.use(session({

    secret: 'Your_Secret_Key',
    resave: true,
    saveUninitialized: true
}))

app.get("/", function (req, res) {
    req.session.name = 'Hello'
    return res.send("Session Set")
})

app.get("/session", function (req, res) {

    var name = req.session.name
    return res.send(name)
})
module.exports = app  