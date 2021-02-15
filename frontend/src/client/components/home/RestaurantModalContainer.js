import { RestaurantModal } from './RestaurantModal';
import { useDispatch, useSelector } from 'react-redux';
import { restActions } from '../../../redux/actions';

export function RestaurantModalContainer() {

    const dispatch = useDispatch();
    const showModal = useSelector(state => (state.restReducer.showModal));
    const restInfo = useSelector(state => (state.restReducer.itemInfo));
    const error = useSelector(state => (state.restReducer.error));

    function handleClose() {
        dispatch(restActions.closeModal());
    }

    return (
        <RestaurantModal
            open={showModal}
            restInfo={restInfo}
            error={error}
            onClose={handleClose}
        />
    );
}