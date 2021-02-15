import React from 'react';
import { Menu, Pagination, Grid, Card, Image, Icon, Rating } from 'semantic-ui-react';
import { SortDropdownContainer } from './SortDropdownContainer';
import { FilterDropdownContainer } from './FilterDropdownContainer';
import defaultImg from '../../../resources/dining.jpg'

export function RestaurantList(props) {

    // return(
    //     <div className='restaurant_list'> 
    //         <span>{props.error}</span>
    //         <Item.Group>
    //             {(props.restaurants).map((restaurant, index) => {
    //                 return (
    //                     <Item key={index}>
    //                         <Item.Image 
    //                             size='mini' 
    //                             onError={ (ev) => { ev.target.src = restaurant.icon } } 
    //                             src={ restaurant.photo } 
    //                             alt='No Image' 
    //                         />

    //                         <Item.Content>
    //                             <Item.Header as='a'>{restaurant.name}</Item.Header>
    //                             <Item.Meta>{restaurant.address}</Item.Meta>
    //                             <Item.Extra>{restaurant.rating}</Item.Extra>
    //                             <Button onClick={() => props.onInspect(restaurant)}>Inspect</Button>
    //                         </Item.Content>
    //                     </Item>
    //                 );
    //             })}
    //         </Item.Group>
    //         <Menu floated='right' pagination>
    //             <Pagination
    //                 totalPages={props.totalPages}
    //                 onPageChange={props.onPageChange}
    //                 firstItem={null}
    //                 lastItem={null}
    //             />
    //         </Menu>
    //     </div>
    // );
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
                <Grid.Row columns='4'>
                    {(props.restaurants).map((restaurant, index) => {
                        return (
                            <Grid.Column>
                                <Card
                                    onClick={() => props.onInspect(restaurant)}
                                    key={index}
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
                                        {/* <span margin='122px'>
                                            <Icon name='star' />
                                            {restaurant.rating}
                                        </span> */}
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