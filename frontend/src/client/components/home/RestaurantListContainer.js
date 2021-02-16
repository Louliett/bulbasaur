import { useEffect } from 'react';
import { RestaurantList } from './RestaurantList';
import { useDispatch, useSelector } from 'react-redux';
import { restActions } from '../../../redux/actions';

export function RestaurantListContainer() {

    console.log(' runs ');

    const dispatch = useDispatch();
    const allItems = useSelector(state => (state.restReducer.allItems));
    const paginatedItems = useSelector(state => (state.restReducer.paginatedItems));
    const filteredItems = useSelector(state => (state.restReducer.filteredItems));
    const error = useSelector(state => (state.restReducer.error));
    const totalPages = useSelector(state => (state.restReducer.totalPages));
    const currentPage = useSelector(state => (state.restReducer.currentPage));
    const restPerPage = 8; //The user can decide how many restaurants to show per page and the server will handle it.
    const sorting = useSelector(state => (state.restReducer.sorting));
    const filters = useSelector(state => (state.restReducer.filters));

    useEffect(() => {
        if (filters.length > 0) {
            dispatch(restActions.filterRestaurants(filters, filteredItems, currentPage, restPerPage));
        }
        if (sorting.length > 0) {
            dispatch(restActions.sortRestaurants(sorting, filteredItems, currentPage, restPerPage));
        } 
        if (sorting.length === 0 && filters.length === 0) {
            dispatch(restActions.getRestaurants(currentPage, restPerPage));
        }
    }, [currentPage, filters, sorting]);

    function handlePageChange(event, data) {
        dispatch(restActions.setCurrentPage(data.activePage));
    }

    function handleInspect(restaurant) {
        dispatch(restActions.openModal(restaurant));
    }

    function handleSortChange(event, data) {
        dispatch(restActions.setSorting(data.value));
    }

    function handleFilterChange(event, data) {
        dispatch(restActions.setFilters(data.value));
    }

    return (
        <RestaurantList
            restaurants={paginatedItems}
            error={error}
            onInspect={handleInspect}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onSortChange={handleSortChange}
            onFilterChange={handleFilterChange}
        />
    );
}