const express = require('express');
const router = express.Router();

const Brand_contect = require('../Models/Brand_contectSchema');

router.post('/Contect_brand', async function (req, res, next) {
    try {
        const data = await Brand_contect.create(req.body);
        res.status(200).send(data);
    }
    catch (error) {
        res.status(400).send(error);
    }
})

router.get('/Getcontect_brand', async function (req, res, next) {
    try {
        const data = await Brand_contect.find();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(400).send(error);
    }
})

router.put('/update_brand/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await Brand_contect.findByIdAndUpdate(id, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            mail: req.body.mail,
            company_name: req.body.company_name,
            company_website: req.body.company_website,
            company_phone: req.body.company_phone,
            message: req.body.message
        });
        res.status(200).send(data)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/Delete_brand/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await Brand_contect.findByIdAndDelete(id);

        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;