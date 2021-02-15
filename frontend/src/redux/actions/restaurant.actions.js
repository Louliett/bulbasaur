import { restConstants } from '../constants';
import { restService } from '../../services/restaurant.service';

export const restActions = {
    getRestaurants,
    getRestPerPage,
    setCurrentPage,
    openModal,
    closeModal,
    setSortingState,
    getRestSortByRatingAsc,
    getRestSortByRatingDes,
    getRestSortByPriceLvlAsc,
    getRestSortByPriceLvlDes,
    getOpenHoursTest,
    setFilterAmount,
    setFilters,
    getRestFiltered
}


function getRestaurants() {

    return dispatch => {
        dispatch(request());

        restService.getRestaurants()
        .then(restaurants => dispatch(success(restaurants)))
        .catch(error => dispatch(failure(error)));
    }

    function request() { return { type: restConstants.GETALL_REQUEST } }
    function success(restaurants) { return { type: restConstants.GETALL_SUCCESS, payload: restaurants } }
    function failure(error) { return { type: restConstants.GETALL_FAILURE, payload: error } }
}


function getRestPerPage(page_number, rest_per_page) {

    return dispatch => {
        dispatch(request());

        restService.getRestPerPage(page_number, rest_per_page)
        .then(restaurants => dispatch(success(restaurants[0], restaurants[1])))
        .catch(error => dispatch(failure(error)));
    }

    function request() { return { type: restConstants.PERPAGE_REQUEST } }
    function success(totalPages, restaurants) { return { type: restConstants.PERPAGE_SUCCESS, payload: { totalPages, restaurants } } }
    function failure(error) { return { type: restConstants.PERPAGE_FAILURE, payload: error } }
}


function setCurrentPage(page_number) {
    return { type: restConstants.SETCURRENT_PAGE, payload: page_number }
}

function openModal(restaurant) {

    return { 
        type: restConstants.OPEN_MODAL, 
        payload: {
            modalState: true,
            modalInfo: restaurant
        } 
    }
}


function closeModal() {
    return { type: restConstants.CLOSE_MODAL, payload:false }
}

function getRestSortByRatingAsc(page_number, rest_per_page) {

    return dispatch => {
        dispatch(request());

        restService.getRestSortByRatingAsc(page_number, rest_per_page)
        .then((restaurants) => { dispatch(success(restaurants[0], restaurants[1])) })
        .catch((error) => { dispatch(failure(error)) })
    }

    function request() { 
        return {type: restConstants.SORT_RATING_ASC_REQUEST } }
    function success(totalPages, restaurants) { 
        return { 
            type: restConstants.SORT_RATING_ASC_SUCCESS, 
            payload: { totalPages, restaurants }  
        } 
    }
    function failure(error) { return {type: restConstants.SORT_RATING_ASC_FAILURE, payload: error } }
}

function getRestSortByRatingDes(page_number, rest_per_page) {

    return dispatch => {
        dispatch(request());

        restService.getRestSortByRatingDes(page_number, rest_per_page)
        .then((restaurants) => { dispatch(success(restaurants[0], restaurants[1])) })
        .catch((error) => { dispatch(failure(error)) })
    }

    function request() { return {type: restConstants.SORT_RATING_DES_REQUEST } }
    function success(totalPages, restaurants) { 
        return { 
            type: restConstants.SORT_RATING_DES_SUCCESS, 
            payload: { totalPages, restaurants } 
        } 
    }
    function failure(error) { return {type: restConstants.SORT_RATING_DES_FAILURE, payload: error } }
}

function getRestSortByPriceLvlAsc(page_number, rest_per_page) {

    return dispatch => {
        dispatch(request());

        restService.getRestSortByPriceLvlAsc(page_number, rest_per_page)
        .then((restaurants) => { dispatch(success(restaurants[0], restaurants[1])) })
        .catch((error) => { dispatch(failure(error)) })
    }

    function request() { return {type: restConstants.SORT_PRICELVL_ASC_REQUEST } }
    function success(totalPages, restaurants) { 
        return { 
            type: restConstants.SORT_PRICELVL_ASC_SUCCESS, 
            payload: { totalPages, restaurants } 
        } 
    }
    function failure(error) { return {type: restConstants.SORT_PRICELVL_ASC_FAILURE, payload: error } }
}

function getRestSortByPriceLvlDes(page_number, rest_per_page) {

    return dispatch => {
        dispatch(request());

        restService.getRestSortByPriceLvlDes(page_number, rest_per_page)
        .then((restaurants) => { dispatch(success(restaurants[0], restaurants[1])) })
        .catch((error) => { dispatch(failure(error)) })
    }

    function request() { return {type: restConstants.SORT_PRICELVL_DES_REQUEST } }
    function success(totalPages, restaurants) { 
        return { 
            type: restConstants.SORT_PRICELVL_DES_SUCCESS, 
            payload: { totalPages, restaurants } 
        } 
    }
    function failure(error) { return {type: restConstants.SORT_PRICELVL_DES_FAILURE, payload: error } }
}

function setSortingState(sorting_state) {
    return { type: restConstants.SET_SORTING_STATE, payload: sorting_state }
}

function getOpenHoursTest(isOpen, page, restPerPage) {

    return dispatch => {
        dispatch(request());

        restService.getOpenHoursTest(isOpen, page, restPerPage)
        .then((restaurants) => { dispatch(success(restaurants[0], restaurants[1])) })
        .catch((error) => { dispatch(failure(error)) });
    }

    function request() { return { type: restConstants.GET_OPEN_HOURS_REQUEST } }
    function success(totalPages, restaurants) { 
        return { 
            type: restConstants.GET_OPEN_HOURS_SUCCESS, 
            payload: {totalPages, restaurants} 
        }
    }
    function failure(error) { return { type: restConstants.GET_OPEN_HOURS_FAILURE, payload: error } }
}

function setFilterAmount(amount) {
    return {
        type: restConstants.SET_FILTER_AMOUNT,
        payload: amount
    }
}

function setFilters(filters) {
    return {
        type: restConstants.SET_FILTERS,
        payload: filters
    }
}

function getRestFiltered(filters, page, restPerPage) {

    return dispatch => {

        dispatch(request());
        restService.getRestFiltered(filters, page, restPerPage)
        .then((items) => { dispatch(success(items[0], items[1])) })
        .catch((error) => { dispatch(failure(error)) });
    }

    function request() { return { type: restConstants.GETREST_FILTERED_REQUEST } }
    function success(totalPages, restaurants) {
        return {
            type: restConstants.GETREST_FILTERED_SUCCESS,
            payload: {totalPages, restaurants}
        }
    }
    function failure(error) { return { type: restConstants.GETREST_FILTERED_FAILURE, payload: error } }
}