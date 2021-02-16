import { restConstants } from '../constants';
import defaultPhoto from '../../resources/restaurant.png';

const defaultState = {
    allItems: [],
    paginatedItems: [],
    filteredItems: [],
    itemInfo: {
        opening_hours: ['Loading...', 'Loading...'],
        address: 'Loading...',
        phone_number: 'Loading...',
        location: {},
        icon: defaultPhoto,
        name: 'Loading...',
        rating: 'Loading...',
        price_level: 0,
        google_maps_url: 'Loading...',
        website: 'Loading...',
        photo: defaultPhoto,
        id: 'Loading...'
    },
    error: null,
    showModal: false,
    currentPage: 1,
    totalPages: 1,
    sorting: '',
    filters: []
}

const loadingRestState = [{
    opening_hours: ['Loading...', 'Loading...'],
    address: 'Loading...',
    phone_number: 'Loading...',
    location: {},
    icon: defaultPhoto,
    name: 'Loading...',
    rating: 'Loading...',
    google_maps_url: 'Loading...',
    website: 'Loading...',
    photo: defaultPhoto,
    id: 'Loading...'
}];

export function restReducer(state = defaultState, action) {

    switch(action.type) {
        case restConstants.GETALL_REQUEST:
            return {
                ...state,
                allItems: loadingRestState,
                paginatedItems: loadingRestState,
                filteredItems: loadingRestState
            }
        case restConstants.GETALL_SUCCESS:
            return {
                ...state,
                allItems: action.payload.allItems,
                totalPages: action.payload.totalPages,
                paginatedItems: action.payload.paginatedItems,
                filteredItems: action.payload.allItems
            }
        case restConstants.GETALL_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case restConstants.SETCURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case restConstants.OPEN_MODAL:
            return {
                ...state,
                showModal: action.payload.modalState,
                itemInfo: action.payload.modalInfo
            }
        case restConstants.CLOSE_MODAL:
            return {
                ...state,
                showModal: action.payload
            }
        case restConstants.SET_FILTERS:
             return {
                 ...state,
                 filters: action.payload
             }
        case restConstants.GET_REST_FILTERED:
            return {
                ...state,
                totalPages: action.payload.totalPages,
                filteredItems: action.payload.filteredItems,
                paginatedItems: action.payload.paginatedItems
            }
        case restConstants.SET_SORTING:
            return {
                ...state,
                sorting: action.payload
            }
        case restConstants.GET_REST_SORTED:
            return {
                ...state,
                totalPages: action.payload.totalPages,
                filteredItems: action.payload.filteredItems,
                paginatedItems: action.payload.paginatedItems
            }  
        default:
            return state
    }
}