import { useEffect } from 'react';
import { RestaurantList } from './RestaurantList';
import { useDispatch, useSelector } from 'react-redux';
import { restActions } from '../../../redux/actions';
import { restService } from '../../../services/restaurant.service';

export function RestaurantListContainer() {

    const dispatch = useDispatch();
    const restaurants = useSelector(state => (state.restReducer.items));
    const error = useSelector(state => (state.restReducer.error));
    const totalPages = useSelector(state => (state.restReducer.totalPages));
    const currentPage = useSelector(state => (state.restReducer.currentPage));
    const restPerPage = 8; //The user can decide how many restaurants to show per page and the server will handle it.
    const sortingState = useSelector(state => (state.restReducer.sortingState));
    const filters = useSelector(state => (state.restReducer.filters));

    useEffect(() => {
        //dispatch(restActions.getRestPerPage(currentPage, restPerPage));
        restService.renderSortingState(sortingState, dispatch, restActions, currentPage, restPerPage);  

        if(filters.length > 0) {
            dispatch(restActions.getRestFiltered(filters, currentPage, restPerPage));
        }
        // switch(filterAmount) {
        //     case []:
        //         return;
        //     case 1:
        //         dispatch(restActions.getOpenHoursTest(true, currentPage, restPerPage));
        //         break;
        //     default:
        //         return;
        // }
    }, [currentPage, sortingState, filters]);

    function handlePageChange(event, data) {
        dispatch(restActions.setCurrentPage(data.activePage));
    }

    function handleInspect(restaurant) {
        dispatch(restActions.openModal(restaurant));
    }

    function handleSortChange(event, data) {
        console.log(data);
        dispatch(restActions.setSortingState(data.value));
    }

    function handleFilterChange(event, data) {
        console.log(data);
        //dispatch(restActions.setFilterAmount(data.value.length));
        dispatch(restActions.setFilters(data.value))
    }

    return (
        <RestaurantList
            restaurants={restaurants}
            error={error}
            onInspect={handleInspect}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onSortChange={handleSortChange}
            onFilterChange={handleFilterChange}
        />
    );
}