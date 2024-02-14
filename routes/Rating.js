const express = require('express');
const router = express.Router();

const Rating = require('../Models/RatingSchema');

router.post('/response',async function(req,res,next){
    try 
    {
        const data = await Rating.create(req.body)
        res.status(200).send(data);
    } 
    catch (error)
    {
        res.status(401).send(error)
    }
})

module.exports = router