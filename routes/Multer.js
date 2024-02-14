const express = require('express');
const Multer = require('../Models/MulterSchema');
const router = express.Router();

router.post('/Imageset', async (req, res, next) => {
    try {
        const setimage = {
            imagename: req.body.imagename
        };

        const data = await Multer.create(setimage);
        res.status(201).send(data);
    }
    catch (error) {
        res.send(error);
    }
})

module.exports = router;