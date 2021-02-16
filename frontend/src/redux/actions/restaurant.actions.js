import { restConstants } from '../constants';
import { restService } from '../../services/restaurant.service';

export const restActions = {
    getRestaurants,
    setCurrentPage,
    openModal,
    closeModal,
    setFilters,
    filterRestaurants,
    setSorting,
    sortRestaurants
}


//gets all restaurants and returns them paginated
function getRestaurants(page, restPerPage) {

    return dispatch => {
        dispatch(request());

        restService.getRestaurants(page, restPerPage)
        .then((restaurants) => { dispatch(success(restaurants)) })
        .catch((error) => dispatch(failure(error)));
    }

    function request() { return { type: restConstants.GETALL_REQUEST } }
    function success(rest) { 
        return { 
            type: restConstants.GETALL_SUCCESS, 
            payload: { 
                totalPages: rest.totalPages, 
                allItems: rest.allItems,
                paginatedItems: rest.paginatedItems
            }
        } 
    }
    function failure(error) { return { type: restConstants.GETALL_FAILURE, payload: error } }
}


//sets the current page
function setCurrentPage(page_number) {
    return { type: restConstants.SETCURRENT_PAGE, payload: page_number }
}


//opens a modal with restaurant info
function openModal(restaurant) {
    return { 
        type: restConstants.OPEN_MODAL, 
        payload: {
            modalState: true,
            modalInfo: restaurant
        } 
    }
}


//closes the modal with restaurant info
function closeModal() {
    return { type: restConstants.CLOSE_MODAL, payload:false }
}


//sets current filters applied on items
function setFilters(filters) {

    return {
        type: restConstants.SET_FILTERS,
        payload: filters
    }
}

//filters restaurants based on array of filters
//returns filtered restaurants in paginated form
function filterRestaurants(filters, restaurants, page, restPerPage) {

    let filtered = restService.filterRestaurants(filters, restaurants);
    let paginated = restService.paginateRestaurants(filtered, page, restPerPage);

    return {
        type: restConstants.GET_REST_FILTERED,
            payload: { 
                totalPages: paginated[0],
                filteredItems: filtered,
                paginatedItems: paginated[1]
            }
    }

}

//sets current filters applied on items
function setSorting(sorting) {

    return {
        type: restConstants.SET_SORTING,
        payload: sorting
    }

}

//sorts restaurants based on a sorting criteria: price_low_high, rating_high_low etc
//returns sorted restaurants in paginated form
function sortRestaurants(sorting, restaurants, page, restPerPage) {

    let sorted = restService.sortRestaurants(sorting, restaurants);
    let paginated = restService.paginateRestaurants(sorted, page, restPerPage);
    
    return {
        type: restConstants.GET_REST_SORTED,
            payload: { 
                totalPages: paginated[0],
                filteredItems: sorted,
                paginatedItems: paginated[1]
            }
    }

}