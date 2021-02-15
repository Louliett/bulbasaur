import { restConstants } from '../constants';
import defaultPhoto from '../../resources/restaurant.png';

const defaultState = {
    items: [],
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
    sortingState: '',
    //filterAmount: 0,
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
                items: loadingRestState
            }
        case restConstants.GETALL_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        case restConstants.GETALL_FAILURE:
            return {
                ...state,
                items: action.payload
            }
        case restConstants.PERPAGE_REQUEST:
            return {
                ...state,
                items: loadingRestState
            }
        case restConstants.PERPAGE_SUCCESS:
            return {
                ...state,
                totalPages: action.payload.totalPages,
                items: action.payload.restaurants
            }
        case restConstants.PERPAGE_FAILURE:
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
        case restConstants.SET_SORTING_STATE:
            return {
                ...state,
                sortingState: action.payload
            }
        case restConstants.SORT_RATING_ASC_REQUEST:
            return {
                ...state,
                items: loadingRestState
            }
        case restConstants.SORT_RATING_ASC_SUCCESS:
            return {
                ...state,
                totalPages: action.payload.totalPages,
                items: action.payload.restaurants
            }
        case restConstants.SORT_RATING_ASC_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case restConstants.SORT_RATING_DES_REQUEST:
            return {
                ...state,
                items: loadingRestState
            }
        case restConstants.SORT_RATING_DES_SUCCESS:
            return {
                ...state,
                totalPages: action.payload.totalPages,
                items: action.payload.restaurants
            }
        case restConstants.SORT_RATING_DES_FAILURE:
            return {
                ...state,
                error: action.payload
            }         
        case restConstants.SORT_PRICELVL_ASC_REQUEST:
            return {
                ...state,
                items: loadingRestState
            }
        case restConstants.SORT_PRICELVL_ASC_SUCCESS:
            return {
                ...state,
                totalPages: action.payload.totalPages,
                items: action.payload.restaurants
            }
        case restConstants.SORT_PRICELVL_ASC_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case restConstants.SORT_PRICELVL_DES_REQUEST:
            return {
                ...state,
                items: loadingRestState
            }
        case restConstants.SORT_PRICELVL_DES_SUCCESS:
            return {
                ...state,
                totalPages: action.payload.totalPages,
                items: action.payload.restaurants
            }
        case restConstants.SORT_PRICELVL_DES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        // case restConstants.SET_FILTER_AMOUNT:
        //     return {
        //         ...state,
        //         filterAmount: action.payload
        //     }
        // case restConstants.GET_OPEN_HOURS_REQUEST:
        //     return {
        //         ...state,
        //         items: loadingRestState
        //     }
        // case restConstants.GET_OPEN_HOURS_SUCCESS:
        //     return {
        //         ...state,
        //         totalPages: action.payload.totalPages,
        //         items: action.payload.restaurants
        //     }
        // case restConstants.GET_OPEN_HOURS_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload
        //     }
        case restConstants.SET_FILTERS:
            return {
                ...state,
                filters: action.payload
            }
        case restConstants.GETREST_FILTERED_REQUEST:
            return {
                ...state,
                items: loadingRestState
            }
        case restConstants.GETREST_FILTERED_SUCCESS:
            return {
                ...state,
                totalPages: action.payload.totalPages,
                items: action.payload.restaurants
            }
        case restConstants.GETREST_FILTERED_FAILURE:
            return {
                ...state,
                error: action.payload
            }    
        default:
            return state
    }
}