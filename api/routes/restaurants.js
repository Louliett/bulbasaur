'use strict';

const express = require('express');
const router = express.Router();
const restService = require('../services/restaurant.service');

//gets all the restaurants from collection
router.get('/', async (req, res) => {
    try {
        res.send(await restService.getAllRestaurants());
    } catch(error) {
        res.send(error);
    }
});

//gets a specific restaurant based on id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        res.send(await restService.getRestaurant(id));
    } catch(error) {
        res.send(error);
    }
});

module.exports = router;