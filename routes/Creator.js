const express = require("express");
const Creatorlogin = require("../Models/CreatorSchema");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/Creatorregister", async (req, res, next) => {

  try {
    const bpassword = await bcrypt.hash("req.body.password", 10);
    const userdetails = {
      creator_name: req.body.creator_name,
      email: req.body.email,
      mobilenumber: req.body.mobilenumber,
      password: bpassword,
    };
    const data = await Creatorlogin.create(userdetails);

    res.status(201).send(data);

  }
  catch (error) {
    res.send(error);
  }
});

router.post("/Creatorlogin", async (req, res, next) => {

  try {
    const email = req.body.email;

    const data = await Creatorlogin.findOne({
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