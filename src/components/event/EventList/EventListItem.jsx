import React, { Component, Fragment } from 'react'
import {withRouter} from 'react-router-dom';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { Link } from 'react-router-dom';
import image from '../../../../src/rana53.jpg'  
import {formate} from 'date-fns';

class EventListItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {event, deleteEvent} = this.props;
    console.log(event);
    return (
      <Fragment>
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image 
                        size="tiny" 
                        circular  
                        src={image}/>
                      <Item.Content>
                        <Item.Header >{event.title}</Item.Header>
                        <Item.Description>
                          Hosted by <a href="/">{event.hostedBy}</a>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> {event.date} |
                    <Icon name="marker" /> {event.placeId}
                  </span>
                </Segment>
                <Segment secondary>
                  <List horizontal>
                    {
                      event.attendees &&
                      event.attendees.map( attendee => (
                        <EventListAttendee key={attendee.id} attendee={attendee}/>
                      ))
                    }
                    
                  </List>
                </Segment>
                <Segment clearing>
                  <span>{event.description}</span>
                  <Button 
                    as="a" 
                    color="red" 
                    floated="right" 
                    content="Delete"  
                    onClick= {() => deleteEvent(event._id)}
                  />
                <Button
                    as={Link}
                    to={`/event/${event._id}`}
                    color="teal" 
                    floated="right" 
                    content="View" 
                //    onClick={() => this.selectEvent(event)}  
                  />
                </Segment>
              </Segment.Group>
              <hr/>
      </Fragment>
    )
  }
}

export default  withRouter(EventListItem);