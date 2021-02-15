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

//gets a specific restaurant base on id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        res.send(await restService.getRestaurant(id));
    } catch(error) {
        res.send(error);
    }
});

//gets limited restaurants per page (the user decides)
router.get('/:page/:rest_per_page', async (req, res) => {
    let page = req.params.page;
    let restPerPage = req.params.rest_per_page;
    try {
        let allRestaurants = await restService.getAllRestaurants();
        let someRestaurants = restService.restPerPage(allRestaurants, page, restPerPage);
        res.send(someRestaurants);
    } catch (error) {
        res.send(error);
    }
});

//gets all restaurants sorted by rating in ascending order
router.get('/:page/:rest_per_page/sort-by-rating-ascending', async (req, res) => {
    let page = req.params.page;
    let restPerPage = req.params.rest_per_page;
    try {
        let allRestaurants = await restService.getRatingLowToHigh();
        let someRestaurants = restService.restPerPage(allRestaurants, page, restPerPage);
        res.send(someRestaurants);
    } catch (error) {
        res.send(error);
    }
});

//gets all restaurants sorted by rating in descending order
router.get('/:page/:rest_per_page/sort-by-rating-descending', async (req, res) => {
    let page = req.params.page;
    let restPerPage = req.params.rest_per_page;
    try {
        let allRestaurants = await restService.getRatingHighToLow()
        let someRestaurants = restService.restPerPage(allRestaurants, page, restPerPage);
        res.send(someRestaurants);
    } catch (error) {
        res.send(error);
    }
});

//gets all restaurants sorted by price level in asscending order
router.get('/:page/:rest_per_page/sort-by-pricelvl-ascending', async (req, res) => {
    let page = req.params.page;
    let restPerPage = req.params.rest_per_page;
    try {
        let allRestaurants = await restService.getPriceLvlLowToHigh()
        let someRestaurants = restService.restPerPage(allRestaurants, page, restPerPage);
        res.send(someRestaurants);
    } catch (error) {
        res.send(error);
    }
})

//gets all restaurants sorted by price level in asscending order
router.get('/:page/:rest_per_page/sort-by-pricelvl-descending', async (req, res) => {
    let page = req.params.page;
    let restPerPage = req.params.rest_per_page;
    try {
        let allRestaurants = await restService.getPriceLvlHighToLow()
        let someRestaurants = restService.restPerPage(allRestaurants, page, restPerPage);
        res.send(someRestaurants);
    } catch (error) {
        res.send(error);
    }
})

// router.post('/:page/:rest_per_page/opening-hours', async (req, res) => {
//     let page = req.params.page;
//     let restPerPage = req.params.rest_per_page;
//     let opened = req.body.opened;
//     try {
//         let allRestaurants = await restService.getAllRestaurants();
//         let filteredRestaurants = restService.filterOpeningHours(opened, allRestaurants);
//         let arrangedPerPage = restService.restPerPage(filteredRestaurants, page, restPerPage);
//         res.send(arrangedPerPage);
//     } catch (error) {
//         res.send(error);
//     }
// });

// router.post('/:page/:rest_per_page/price-level', async (req, res) => {
//     let page = req.params.page;
//     let restPerPage = req.params.rest_per_page;
//     let hasPriceLevel = req.body.hasPriceLevel;
//     try {
//         let allRestaurants = await restService.getAllRestaurants();
//         let filteredRestaurants = await restService.filterPriceLvl(hasPriceLevel, allRestaurants);
//         let arrangedPerPage = restService.restPerPage(filteredRestaurants, page, restPerPage);
//         res.send(arrangedPerPage);
//     } catch (error) {
//         res.send(error);
//     }

// });

router.post('/:page/:rest_per_page/filter', async (req, res) => {
    let page = req.params.page;
    let restPerPage = req.params.rest_per_page;
    let filters = req.body.filters;

    try {
        let allRestaurants = await restService.getAllRestaurants();
        let filteredRestaurants = await restService.filterManager(filters, allRestaurants);
        let arrangedPerPage = restService.restPerPage(filteredRestaurants, page, restPerPage);
        res.send(arrangedPerPage);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;