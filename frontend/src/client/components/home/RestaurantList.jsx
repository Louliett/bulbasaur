import React from 'react';
import { Menu, Pagination, Grid, Card, Image, Icon, Rating } from 'semantic-ui-react';
import { SortDropdownContainer } from './SortDropdownContainer';
import { FilterDropdownContainer } from './FilterDropdownContainer';

export function RestaurantList(props) {

    return (
        <div className='restaurant_grid'>
            <span>{props.error}</span>
            <span>
                <FilterDropdownContainer onChange={props.onFilterChange} />
            </span>
            <span>
                <SortDropdownContainer onChange={props.onSortChange} />
            </span>
            <br/>
            <br/>
            <Grid>
                <Grid.Row columns='4' >
                    {(props.restaurants).map((restaurant, index) => {
                        return (
                            <Grid.Column key={index}>
                                <Card
                                    onClick={() => props.onInspect(restaurant)}
                                >
                                    <Image
                                        size='small'
                                        onError={ (ev) => { ev.target.src = restaurant.icon } } 
                                        src={ restaurant.photo } 
                                        alt='No Image' 
                                        wrapped 
                                        ui={false}
                                    />
                                    <Card.Content>
                                        <Card.Header>{restaurant.name}</Card.Header>
                                        <Card.Meta>
                                            <span>{restaurant.address}</span>
                                        </Card.Meta>
                                        <Card.Description>Some Description</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <span>
                                            <Rating disabled rating={restaurant.rating} maxRating={5} />
                                        </span>
                                        <span>
                                            <Icon name='dollar sign' />
                                            {restaurant.price_level}
                                        </span>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>                                  
                        
                        );
                    })}
                </Grid.Row>
                <Menu floated='right' pagination>
                    <Pagination
                        totalPages={props.totalPages}
                        onPageChange={props.onPageChange}
                        firstItem={null}
                        lastItem={null}
                    />
                </Menu>  
            </Grid>
        </div>
    );
}