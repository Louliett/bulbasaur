import React from 'react';
import './restaurant-modal.css';
import { Button, Modal, Image, Header, List, HeaderSubheader, Icon } from 'semantic-ui-react';
import google_icon from '../../../resources/google.png';

export function RestaurantModal(props) {

    return (
        <Modal open={props.open}>
            {console.log(props.open, ' modal')}
            <span>{props.error}</span>
            <Modal.Header>{props.restInfo.name}</Modal.Header>
            <Modal.Content image>
                <Image 
                    size='medium' 
                    src={props.restInfo.photo} 
                    onError={ (ev) => { ev.target.src = props.restInfo.icon } }
                    alt='No Image'
                />
                <Modal.Description>
                    <Header>
                        <Icon name='map marker alternate' />
                        {props.restInfo.address}
                    </Header>
                    <HeaderSubheader>
                        <Icon name='phone' />
                        {props.restInfo.phone_number}
                    </HeaderSubheader>
                    <a href={props.restInfo.website} target="_blank" without="true" rel="noreferrer" >
                        {props.restInfo.website}
                    </a>
                    <List>
                        {
                            (props.restInfo.opening_hours).map((opening, index) => {
                                return (
                                    <List.Item key={index}> {opening} </List.Item>
                                )
                            })
                        }
                    </List>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions className='modal_bottom'>
                <div className='left_item'>
                <span className='google_icon'>
                    <a href={props.restInfo.google_maps_url} target="_blank" without="true" rel="noreferrer">
                        <Image 
                            size='mini' 
                            src={google_icon} 
                            alt='Google Coordinates'
                            border='0'
                        />
                    </a> 
                </span>
                <span className='rating'>
                    <Icon name='star' />
                    {props.restInfo.rating + '/5'}
                </span>
                <span className='price_level'>
                    {   //if there is a price level, render the icon and level, else don't
                        (props.restInfo.price_level !== undefined)
                        ? <div>
                            <Icon name='dollar sign' /> 
                            { props.restInfo.price_level + '/3'}
                          </div>
                        : ''
                    }
                </span>
                </div>
                <div className='right_item'>
                <Button color="red" onClick={props.onClose}>Close</Button>
                </div>
                
            </Modal.Actions>
        </Modal>
    );
}