import React, { Component, Fragment } from 'react'
import {withRouter} from 'react-router-dom';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { Link } from 'react-router-dom';
import axios from 'axios'

class EventListItem extends Component {
  state = {
    hostImage: ''
  }

  stateWork = () => {
    console.log("Component Did Mount workd", this.props.event)
    const hostedBy  = this.props.event.hostedBy;
    console.log("Event List Item: Attendee ",hostedBy)
    axios.post("http://localhost:8000/api/user/get-user-by-attendee",{email: hostedBy})
      .then(res =>{
        console.log("result",res.data.success)
        const imagePath = res.data.user.imagePath
        const img ="http://localhost:8000/" + imagePath.slice(15);
        console.log("Life ",img) 
        this.setState({
           hostImage: img
         })
      })
  }
  render() {
    const {event, deleteEvent} = this.props;
    
    if(this.props.event.hostedBy && !this.state.hostImage){
      this.stateWork()
    }
    return (
      <Fragment>
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image 
                        size="tiny" 
                        circular  
                        src={this.state.hostImage}/>
                        {console.log("Host image inside jsx",this.state.hostImage)}
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
                      event.attendee &&
                      event.attendee.map( attende => (
                        <EventListAttendee key={attende._id} attendee={attende}/>
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