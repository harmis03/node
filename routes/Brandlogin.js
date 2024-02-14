const express = require("express");
const Brandlogin = require("../models/BrandloginSchema");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/Brandregister", async (req, res, next) => {
  
  try {
    const bpassword = await bcrypt.hash("req.body.password", 10);
    const userdetails = {
      brand_name: req.body.brand_name,
      email: req.body.email,
      mobilenumber: req.body.mobilenumber,
      password: bpassword,
    };
    const data = await Brandlogin.create(userdetails);

    res.status(201).send(data);

  }
  catch (error) {
    res.send(error);
  }
});

router.post("/Brandlogins", async (req, res, next) => {


  try {
    const email = req.body.email;

    const data = await Brandlogin.findOne({
      email: email,
    });

    var matchpassword = await bcrypt.compare(
      "req.body.password",
      data.password
    );

    if (data.email === email) {
      if (matchpassword) {
        res.status(200).send(data);
      } else {
        res.status(401).send("Password is Invalid....");
      }
    } else {
      res.status(401).send("Email or Password is Invalid");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;