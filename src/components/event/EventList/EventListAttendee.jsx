import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'
import axios from 'axios';

class EventListAttendee extends Component {
  state = {
    image: ''
  }
  componentDidMount() {
    const {attendee} = this.props;
   // console.log("Event Attendee ", this.props)
    axios.post("http://localhost:8000/api/user/get-user-by-attendee",{email: attendee})
      .then(res =>{
        const imagePath = res.data.user.imagePath
        const img ="http://localhost:8000/" + imagePath.slice(15);
        this.setState({
          image: img
        })
      })
  }
  
  render() {

    return (
      <List.Item>
        <Image 
          as='a'
          size='mini'
          circular
          src={this.state.image}
        />
      </List.Item>
    )
  }
}

export default EventListAttendee;