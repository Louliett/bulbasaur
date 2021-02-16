const price = 'price_level';
const rating = 'rating';

export const sortService = {
    sortByPriceAscending,
    sortByPriceDescending,
    sortByRatingAscending,
    sortByRatingDescending
}

function sortByPriceAscending(restaurants) {
    return sortAsc(price, restaurants);
}

function sortByPriceDescending(restaurants) {
    return sortDes(price, restaurants);
}

function sortByRatingAscending(restaurants) {
    return sortAsc(rating, restaurants);
}

function sortByRatingDescending(restaurants) {
    return sortDes(rating, restaurants);
}


//this function will sort ascending an array of objects based on a key value
//moreover it will handle objects with missing keys 
//by placing them at the begining of the array
function sortAsc(prop, arr) {
    prop = prop.split('.');
    var len = prop.length;

    arr.sort(function (a, b) {
        var i = 0;
        var key;

        while( i < len ) {
            key = prop[i];

            if(!a.hasOwnProperty(key)) return -1;
            if(!b.hasOwnProperty(key)) return 1;

            a = a[key];
            b = b[key];
            i++;
        }
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    return arr;
};

//this function will sort descending an array of objects based on a key value
//moreover it will handle objects with missing keys 
//by placing them at the end of the array
function sortDes(prop, arr) {
    prop = prop.split('.');
    var len = prop.length;

    arr.sort(function (a, b) {
        var i = 0;
        var key;

        while( i < len ) {
            key = prop[i];

            if(!a.hasOwnProperty(key)) return 1;
            if(!b.hasOwnProperty(key)) return -1;

            a = a[key];
            b = b[key];
            i++;
        }
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
    return arr;
};