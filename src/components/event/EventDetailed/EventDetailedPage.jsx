import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import {withRouter } from 'react-router-dom'
import EventDetailedSidebar from './EventDetailedSidebar'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import axios from 'axios'

class EventDetailedPage extends Component {
  constructor(props){
    super(props)
  }
  state = {
    id: this.props.match.params.id,
    event: { },
    placeObject: {}
  }
  componentDidMount(){
    const url = "http://localhost:8000/api/event/" + `${this.state.id}`
    axios.get(url)
      .then( (response) => {
        console.log("SUCCESS");
        this.setState({
          event: response.data.event
        })
      })
      .catch(err => {
        console.log("FALSE");
        return err;
      });
  }
  onAddAttendee = (attende) => {
    console.log("Update attendee work start")
    const updateEvent = this.state.event;
    if(updateEvent.attendee.indexOf(attende) === -1){
      updateEvent.push(attende)
    }
    this.setState({
      event: updateEvent
    })
    console.log("Update attendee work end");
  }
  render(){
    const {event} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventDetailedHeader
           onAddAttendee={this.onAddAttendee} 
           event={event}/>
          <EventDetailedInfo event={event}/>
          <EventDetailedChat/> 
        </Grid.Column>
        <Grid.Column width={6}>
          <EventDetailedSidebar attendees={event.attendee}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(EventDetailedPage);