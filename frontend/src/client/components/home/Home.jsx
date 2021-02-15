import React from 'react';
import { RestaurantListContainer } from './RestaurantListContainer';
import { RestaurantModalContainer } from './RestaurantModalContainer';

//This is a parent representational component
export function Home() {

    return (
        <div className='home'>
            <RestaurantListContainer />
            <RestaurantModalContainer />
        </div>
    );
}