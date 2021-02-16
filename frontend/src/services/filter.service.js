
export const filterService = {
    filterByOpenAllWeek,
    filterByPriceLevelExists,
    filterInOrder
}

//can be used to filter restaurants that are open all week or not
function filterByOpenAllWeek(opened, restaurants) {

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

//can be used to filter restaurants that have and have no price_level
function filterByPriceLevelExists(hasPriceLevel, restaurants) {
    let restWithPriceLevel = [];
    let restWithoutPriceLevel = [];

    for (let i = 0; i < restaurants.length; i++) {
        if (('price_level' in restaurants[i])) {
            restWithPriceLevel.push(restaurants[i]);
        } else {
            restWithoutPriceLevel.push(restaurants[i]);
        }
    }

    if (hasPriceLevel) {
        return restWithPriceLevel;
    } else {
        return restWithoutPriceLevel;
    }
}

//this function applies filters sequentially
function filterInOrder(filters, restaurants) {
    let isOpen = 'is_open_all_week';
  
    if(filters[0] === isOpen) {
        let filteredByOpen = filterByOpenAllWeek(true, restaurants);
        let filteredByPrice = filterByPriceLevelExists(true, filteredByOpen);
        return filteredByPrice;
    } else {
        let filteredByPrice = filterByPriceLevelExists(true, restaurants);
        let filteredByOpen = filterByOpenAllWeek(true, filteredByPrice);
        return filteredByOpen;
    }
}

