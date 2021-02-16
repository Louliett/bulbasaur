import { SortDropdown } from './SortDropdown';

export function SortDropdownContainer(props) {

    const options = [
        { key: 1, text: 'Rating Low to High', value: 'rating_asc' },
        { key: 2, text: 'Rating High to Low', value: 'rating_des' },
        { key: 3, text: 'Price Level Low to High', value: 'price_asc' },
        { key: 4, text: 'Price Level High to Low', value: 'price_des' }
    ]

    return (
        <SortDropdown 
            options={options}
            onChange={props.onChange}
        />
    );
}