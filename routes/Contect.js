const Contect = require('../Models/ContectSchema');
const express = require('express')
const router = express.Router();

router.post('/Form', async function (req, res, next) {
    try {
        const data = await Contect.create(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send.error;
    }
})

router.get('/Getcontect_creator', async function (req, res, next) {
    try {
        const data = await Contect.find();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.put('/Update_creator/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await Contect.findByIdAndUpdate(id, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            message: req.body.message
        });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(400).send(error)
    }
});

router.delete('/Delete_creator/:id', async function (req, res, next) {

    try {
        const id = req.params.id
        const data = await Contect.findByIdAndDelete(id);

        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;
