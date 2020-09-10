import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Button } from 'semantic-ui-react';
import EventList from './EventList/EventList'
class EventDashboard extends Component {
  state = {
    events: [{
        _id: '',
        title: '',
        date: '',
        placeId: '',
        hostedBy:'',
        attendee: [],
        description: '',
        error: ''
    }]
  }
  
  componentWillMount() {
    axios.get("http://localhost:8000/api/event")
      .then(response=> {
        const responseEvents = response.data.events
        this.setState({
          events: responseEvents
        })
      })
  }
  handleDeleteEvent = (id) => {
    console.log("Delete request",id);
    const url = "http://localhost:8000/api/event/" + `${id}`
    axios.delete(url)
      .then((response) => {
        const newEvent = this.state.events.filter((event) => event._id !== response.data.event._id)
        this.setState({
          events: newEvent
        })
      })
  }
  render() {
    const {events} = this.state
    return (
      <div className="Container">
         <Grid>
        <Grid.Column width={10}>
          <EventList 
            events={events} 
            deleteEvent={this.handleDeleteEvent}
          />
          
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
      </div>
      
     
    )
  }
}

export default EventDashboard;