'use strict';

const Restaurant = require('../../mongodb/models/restaurant');

const RestService = {
    getAllRestaurants,
    getRestaurant,
    getRatingLowToHigh,
    getRatingHighToLow,
    getPriceLvlLowToHigh,
    getPriceLvlHighToLow,
    restPerPage,
    filterManager
}

async function getAllRestaurants() {
    try {
        const results = await Restaurant.find().exec();
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

async function getRatingLowToHigh() {
    try {
        return await Restaurant.find().sort({ 'rating': 1 });
    } catch (error) {
        console.log(`Cannot fetch from db: ${error}`);
    }
}

async function getRatingHighToLow() {
    try {
        return await Restaurant.find().sort({'rating': -1});
    } catch (error) {
        console.log(`Cannot fetch from db: ${error}`);
    }
}

async function getPriceLvlLowToHigh() {
    try {
        return await Restaurant.find({}).sort({price_level: 1});
    } catch (error) {
        console.log(`Cannot fetch from db: ${error}`);
    }
}

async function getPriceLvlHighToLow() {
    try {
        return await Restaurant.find({}).sort({price_level: 1});
    } catch (error) {
        console.log(`Cannot fetch from db: ${error}`);
    }
}

//custom function to arrange items per page based on requested page
//returns and array with the total amount of pages at index 0 and items on specific page at index 1
function restPerPage(restaurants, page, perPage) {
    var high;
    var low;
    var total_pages = Math.ceil(restaurants.length / perPage);

    if (restaurants.length > perPage) {
        high = page * perPage;
        low = ((page - 1) * perPage);
        return [total_pages, restaurants.slice(low, high)];
    } else {
        high = restaurants.length;
        low = 1;
        return [total_pages, restaurants];
    }
}

//can be used to filter restaurants that are open all week or not
function filterOpeningHours(opened, restaurants) {

    let openedAllWeek = [];
    let notOpenedAllWeek = [];

    for (let i = 0; i < restaurants.length; i++) {
        let opening_hours = restaurants[i].opening_hours;
        if (opening_hours.find(item => item.includes("Closed")) === undefined ) {
            openedAllWeek.push(restaurants[i]);
        } else {
            notOpenedAllWeek.push(restaurants[i]);
        }
    }
    
    if(opened) {
        return openedAllWeek;
    } else {
        return notOpenedAllWeek;
    }
}

//can be used to filter items that have and have no price_level
async function filterPriceLvl(hasPriceLevel) {
    try {
        return await Restaurant.find({ 'price_level': {'$exists': hasPriceLevel } });
    } catch (error) {
        console.log(`Cannot fetch from db: ${error}`);
    }
}

//this may not the most elegant way but it will do the job
async function filterManager(filters, restaurants) {
    //list of possible filters
    let isOpen = 'is_open_all_week';
    let hasPriceLevel = 'has_price_level';

    if(filters.includes(isOpen !== undefined && hasPriceLevel === undefined)) {
        //user requested ONLY open_all_week filter
        return filterOpeningHours(true, restaurants);
    } else if(filters.includes(isOpen === undefined && hasPriceLevel !== undefined)) {
        //user requested only has_price_level filter
        return await filterPriceLvl(true, restaurants);
    } else {
        //user requested both filters
        //here we need to respect the order of filters
        return await filterInOrder(filters, restaurants);
    }
}

async function filterInOrder(filters, restaurants) {
    let isOpen = 'is_open_all_week';

    if(filters[0] === isOpen) {
        let filteredByOpen = filterOpeningHours(true, restaurants);
        let filteredByPrice = await filterPriceLvl(true, filteredByOpen);
        return filteredByPrice;
    } else {
        let filteredByPrice = await filterPriceLvl(true, restaurants);
        let filteredByOpen = filterOpeningHours(true, filteredByPrice);
        return filteredByOpen;
    }
}

module.exports = RestService;