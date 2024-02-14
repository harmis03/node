const express = require("express");
const session = require('express-session');
const bcrypt = require('bcrypt');
const router = express.Router();

const userlogin = require("../Models/UserloginSchema");

router.use(session({
    secret: 'Your_Secret_Key',
    resave: true,
    saveUninitialized: true
}))

router.get('/', async (req, res) => {
    req.session.name = 'Yash';
    return res.send("Session set");
})


router.get('/set_session', async (req, res) => {
    var name = req.session.name;
    return res.send(name);
})

router.post('/userlogin', async (req, res) => {


    try {

        const login = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        };

        const data = await userlogin.create(login);
        res.status(201).send(data);

    } catch (error) {
        res.send(error);
    }
})

module.exports = router;