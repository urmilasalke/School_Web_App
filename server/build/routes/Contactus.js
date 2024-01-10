"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const Contactus = require("../model/Contactus");
router.post("/contact", (req, res) => {
    console.log("inside contact us");
    var newContact = new Contactus({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message,
    });
    newContact
        .save()
        .then(() => res.json("data saved"))
        .catch(() => res.json("err"));
    console.log("created");
});
module.exports = router;
