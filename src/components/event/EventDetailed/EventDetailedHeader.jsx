import React from 'react'
import { Segment, Image, Item,Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import image from '../../../rana53.jpg'
const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailedHeader= ({event,onAddAttendee}) => {
  const login = localStorage.getItem('token') ? true: false;
  const userName = localStorage.getItem('user-name');
  
  const onJoinRequest = () => {
    const newEvent = event;
    if(newEvent.attendee.indexOf(userName) !== -1){
      console.log('return statement from found attendee')
      return;
    }
    console.log('not found')
    newEvent.attendee.push(userName)
    event = newEvent
    axios.patch("http://localhost:8000/api/event", {updateEvent:newEvent})
      .then((response) => {
        console.log("response message ",response.data.message)
      })
      onAddAttendee(userName)
  }
  const onUpdateEvent = () => {

  }
  return (
    <Segment.Group>
    <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={image} fluid style={eventImageStyle}/>

        <Segment basic style={eventImageTextStyle}>
        <Item.Group>
            <Item>
            <Item.Content>
                <Header
                size="huge"
                content={event.title}
                style={{ color: 'white' }}
                />
                <p>{event.date}</p>
                <p>
                Hosted by <strong>{event.hostedBy}</strong>
                </p>
            </Item.Content>
            </Item>
        </Item.Group>
        </Segment>
    </Segment>

    <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        {
          login && userName != event.hostedBy &&
          <Button color="teal" onClick={onJoinRequest}>JOIN THIS EVENT</Button>
        }
        {
          login && userName === event.hostedBy &&
          <Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
          Manage Event
          </Button>
        }
        
    </Segment>
    </Segment.Group>
  )
}

export default EventDetailedHeader;