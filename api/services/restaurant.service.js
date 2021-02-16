'use strict';

const Restaurant = require('../../mongodb/models/restaurant');

const restService = {
    getAllRestaurants,
    getRestaurant
}

async function getAllRestaurants() {
    try {
        const results = await Restaurant.find({}, '-_id');
        return results;
    } catch(error) {
        console.log(`Cannot fetch all from db: ${error}`);
    }
}

async function getRestaurant(id) {
    try {
        return await Restaurant.findOne({id}).exec();
    } catch(error) {
        console.log(`Cannot fetch restaurant with id: ${id} from db: ${error}`);
    }
}

module.exports = restService;