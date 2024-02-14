const express = require('express');
const router = express.Router();

const Collabration = require('../Models/Collabration_Schema')

router.post('/collab_form', async function (req, res, next) {
    try {
        const data = await Collabration.create(req.body);

        res.status(200).send(data);
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/Collab', async function (req, res, next) {
    try {
        const data = await Collabration.find()

        res.status(200).send(data);

    } catch (error) {
        res.status(400).send(error);
    }

})

router.get('/Get_collab/:id', async function (req, res, next) {
    try {

        const id = req.params.id
        const data = await Collabration.findOne(id, {
            image: req.body.image,
            collab_name: req.body.collab_name,
            collab_content: req.body.collab_content,
            payment: req.body.payment,
            followers: req.body.followers,
            engagement: req.body.engagement,
            min_age: req.body.min_age,
            max_age: req.body.max_age,
            residence: req.body.residence
        });
        res.status(200).send(data)
    }
    catch (error) {
        res.status(400).send(error)
    }
})




module.exports = router;