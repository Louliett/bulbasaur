import { combineReducers } from 'redux';
import { restReducer } from './restaurant.reducer';


//Here one can add multiple reducers
export const rootReducer = combineReducers ({
    restReducer
});