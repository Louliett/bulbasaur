import { FilterDropdown } from './FilterDropdown';

export function FilterDropdownContainer(props) {

    const options = [
        { key: 1, text: 'Is Open All Week', value: 'is_open_all_week' },
        { key: 2, text: 'Has Price Level', value: 'has_price_level' }
    ]

    return (
        <FilterDropdown 
            options={options}
            onChange={props.onChange}
        />
    );
}