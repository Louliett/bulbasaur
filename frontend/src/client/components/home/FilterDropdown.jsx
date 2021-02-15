import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export function FilterDropdown(props) {

    return (
        <Dropdown 
            fluid
            multiple
            selection
            placeholder='Filters'
            options={props.options} 
            onChange={props.onChange}
        />
    );
}