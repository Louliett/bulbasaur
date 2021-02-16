import { filterService } from './filter.service';
import { sortService } from './sort.service';

const API_URL = 'http://localhost:8080/restaurants/';

export const restService = {
    getRestaurants,
    getRestaurant,
    paginateRestaurants,
    filterRestaurants,
    sortRestaurants
}


//gets all restaurants from db and paginates them
async function getRestaurants(page, restPerPage) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    let response = await fetch(API_URL, requestOptions);
    let restaurants =  await response.json();
    let paginatedRest = restService.paginateRestaurants(restaurants, page, restPerPage);
    let rest = {
        allItems: restaurants,
        totalPages: paginatedRest[0],
        paginatedItems: paginatedRest[1]
    }

    return rest;
}

//gets a single restaurant from db based on id
async function getRestaurant(restId) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    let response = await fetch(API_URL + restId, requestOptions);
    let message = await response.json();
    return message;
}


// function to paginate all restaurants based on page number and items per page
// returns and array with the total amount of pages at index 0 and items on a specific page at index 1
function paginateRestaurants(restaurants, page, perPage) {
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
  

  function filterRestaurants(filters, restaurants) {
        //list of possible filters
        let isOpen = 'is_open_all_week';
        let hasPriceLevel = 'has_price_level';
    
        if(filters.includes(isOpen !== undefined && hasPriceLevel === undefined)) {
            //user requested ONLY open_all_week filter
            return filterService.filterOpeningHours(true, restaurants);
        } else if(filters.includes(isOpen === undefined && hasPriceLevel !== undefined)) {
            //user requested only has_price_level filter
            return filterService.filterByPriceLevelExists(true, restaurants);
        } else {
            //user requested both filters
            //here we need to respect the order of filters
            return filterService.filterInOrder(filters, restaurants);
        }
  }

  function sortRestaurants(sorting, restaurants) {

    switch(sorting) {
        case 'price_asc':
            return sortService.sortByPriceAscending(restaurants);
        case 'price_des':
            return sortService.sortByPriceDescending(restaurants);
        case 'rating_asc':
            return sortService.sortByRatingAscending(restaurants);
        case 'rating_des':
            return sortService.sortByRatingDescending(restaurants);
        default:
            return '';
    }
}
