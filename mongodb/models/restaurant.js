'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const restaurantSchema = new Schema({
    id: { type: Number, index: true, unique: true },
    address: String,
    phone_number: String,
    location: {lat: Number, lng: Number},
    icon: String,
    name: String,
    opening_hours: [String],
    price_level: Number,
    rating: Number,
    google_maps_url: String,
    website: String,
    photo: String
});

const Restaurant = mongoose.model('restaurants', restaurantSchema);

module.exports = Restaurant;