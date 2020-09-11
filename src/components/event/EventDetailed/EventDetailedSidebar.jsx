import React, { Fragment } from 'react'
import { Segment, Item, Label } from 'semantic-ui-react'

const EventDetailedSidebar = ({attendees}) => {
  console.log('atende size', attendees)
  const isHost = false; 
  return (
    <Fragment>
        <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
        >
        People Going
        </Segment>
        <Segment attached>
        <Item.Group divided>
        {
          attendees && 
          attendees.map((attendee,i) => (
            <Item key={i}style={{ position: 'relative' }}>
            { isHost && 
              <Label
                style={{ position: 'absolute' }}
                color='orange'
                ribbon='right'
              >
              Host
              </Label>
            }
            <Item.Image size='tiny' src={attendee.photoURL} />
            <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>{attendee}</Item.Header>
            </Item.Content>
            </Item>
          ))     
        }
            
        </Item.Group>
        </Segment>
    </Fragment>
  )
}

export default EventDetailedSidebar
