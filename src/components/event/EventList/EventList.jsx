import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'
import axios from 'axios'
class EventList extends Component {
 
  render() { 
    const { events, deleteEvent} = this.props;
    //console.log(this.props);
    return (
      <Fragment>
       { events && 
          events.map( event => (
            <EventListItem 
              key={event.id} 
              event={event}
              deleteEvent={deleteEvent}
            />
        ))}
      </Fragment>
    ) 
  }
}

export default  EventList;