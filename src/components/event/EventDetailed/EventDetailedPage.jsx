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
    event: { }
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
  render(){
    const {event} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
           <EventDetailedHeader event={event}/>
          <EventDetailedInfo event={event}/>
          <EventDetailedChat/> 
        </Grid.Column>
        <Grid.Column width={6}>
          {/*<EventDetailedSidebar attendees={event.attendees}/> */}
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(EventDetailedPage);