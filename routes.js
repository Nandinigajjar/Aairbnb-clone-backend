const express = require('express');
const Model = require('./model');

const router = express.Router()

module.exports = router;

//Get all Method
router.get('/destinations', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.post('/destinations/', async (req, res, next) => {
    try {
        const data = new Model({
            name: req.body.name,
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            place: req.body.place,
            author_name: req.body.author_name,
            author_description: req.body.author_description,
            author_image: req.body.author_image,
            features: req.body.features,
            description: req.body.description,
            activities: req.body.activities,
            activities_description: req.body.activities_description,
            closes_on: req.body.closes_on,
        })

        await data.save().then(function (models) {
            console.log(models);
            res.status(201).json(models)
        }).catch(function (err) {
            console.log(err);
            res.status(400).json(err)
        });

    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/destinations/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id)
        if (!data) {
            res.status(404).json({ message: "Entity not found" })
        } else {
            res.json(data)
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//Get all Method
router.get('/search/:searchQuery', async (req, res) => {
    try {
        const data = await Model.find({
            $or : [
                {name: {$regex: new RegExp(req.params.searchQuery, "i")}},
                {title: {$regex: new RegExp(req.params.searchQuery, "i")}},
                {place: {$regex: new RegExp(req.params.searchQuery, "i")}},
                {author_name: {$regex: new RegExp(req.params.searchQuery, "i")}},
                {author_description: {$regex: new RegExp(req.params.searchQuery, "i")}},
                // features: req.params.features,
                {description: {$regex: new RegExp(req.params.searchQuery, "i")}},
                {activities_description: {$regex: new RegExp(req.params.searchQuery, "i")}},
                // activities: req.params.activities,
            ]
        });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})