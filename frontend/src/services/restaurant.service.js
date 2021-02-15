import { restConstants } from "../redux/constants";

const API_URL = 'http://localhost:8080/restaurants/';

export const restService = {
    getRestaurants,
    getRestaurant,
    getRestPerPage,
    getRestSortByRatingAsc,
    getRestSortByRatingDes,
    getRestSortByPriceLvlAsc,
    getRestSortByPriceLvlDes,
    renderSortingState,
    getOpenHoursTest,
    getRestFiltered
}

async function getRestaurants() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      let response = await fetch(API_URL, requestOptions);
      let message =  await response.json();
      return message;
}

async function getRestaurant(restId) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    let response = await fetch(API_URL + restId, requestOptions);
    let message = await response.json();
    return message;
}

async function getRestPerPage(page_number, rest_per_page) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let response = await fetch(API_URL + page_number + "/" + rest_per_page, requestOptions);
    let message = await response.json();
    return message;
  }

async function getRestSortByRatingAsc(page_number, rest_per_page) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  let response = await fetch(API_URL + page_number + '/' + rest_per_page + "/sort-by-rating-ascending", requestOptions)
  let message = await response.json();
  return message;
}

async function getRestSortByRatingDes(page_number, rest_per_page) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  let response = await fetch(API_URL + page_number + '/' + rest_per_page + "/sort-by-rating-descending", requestOptions)
  let message = await response.json();
  return message;
}

async function getRestSortByPriceLvlAsc(page_number, rest_per_page) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  let response = await fetch(API_URL + page_number + '/' + rest_per_page + "/sort-by-pricelvl-ascending", requestOptions)
  let message = await response.json();
  return message;
}

async function getRestSortByPriceLvlDes(page_number, rest_per_page) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  let response = await fetch(API_URL + page_number + '/' + rest_per_page + "/sort-by-pricelvl-descending", requestOptions)
  let message = await response.json();
  return message;
}

function renderSortingState(sortingState, dispatch, restActions, currentPage, restPerPage) {

  switch(sortingState) {
    case '':
        dispatch(restActions.getRestPerPage(currentPage, restPerPage))
        break;
    case 'rating_asc':
        dispatch(restActions.getRestSortByRatingAsc(currentPage, restPerPage))
        break;
    case 'rating_des':
        dispatch(restActions.getRestSortByRatingDes(currentPage, restPerPage));
        break;
    case 'price_asc':
        dispatch(restActions.getRestSortByPriceLvlAsc(currentPage, restPerPage));
        break;
    case 'price_des':
        dispatch(restActions.getRestSortByPriceLvlDes(currentPage, restPerPage));
        break;
    default:
        dispatch(restActions.getRestPerPage(currentPage, restPerPage))
  }
}

async function getOpenHoursTest(isOpen, page, restPerPage) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "hasPriceLevel": isOpen
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  let message = await fetch(API_URL + page + '/' + restPerPage + "/opening-hours", requestOptions);
  let response = await message.json();
  return response;
}

async function getRestFiltered (filters, page, restPerPage) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "filters": filters
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  let message = await fetch(API_URL + page + '/' + restPerPage +"/filter", requestOptions)
  let response = await message.json();
  return response;
}