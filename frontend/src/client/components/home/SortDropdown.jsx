import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export function SortDropdown(props) {

    return (
        <Dropdown 
            clearable
            placeholder='Sort'
            options={props.options} 
            selection
            onChange={props.onChange}
        />
    );
}