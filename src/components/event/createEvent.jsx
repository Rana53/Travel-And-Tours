import React, { Component, Fragment } from 'react'
import {Form, Container, Button} from 'react-bootstrap';
import axios from 'axios';

class CreateEvent extends Component {
  constructor(props){
    super(props)
  }
  state = {
    title: '',
    date: '',
    placeId: '',
    hostedBy:'',
    description: '',
    error: ''
  };
  componentWillMount(){
    this.setState({
      hostedBy: localStorage.getItem('user-name')
    })
  }
  submitEvent = () => {
    const {title, date, placeId, hostedBy, description} = this.state;
    if(!title || !date || !placeId){
      console.log("Wrong");
      return ;
    }
    axios.post("http://localhost:8000/api/event/createEvent", this.state)
      .then((response) => {
        console.log(response.data.message);
        if(response.data.success === true){
          console.log("Success Post Event")
          this.props.history.push('/take-a-tour');
        }
        if(response.data.duplication){
          this.setState({
            error: response.data.message
          })
        }
      })
      .catch(err => {
        console.log(err);
      })
    console.log("event Submit");
    console.log(this.state);

  } 
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {title, date, placeId, hostedBy, description ,error} = this.state;
    return (
      <Fragment>
        <Container className="main">
        <Form>
          <Form.Group>
            <Form.Label>Event Title</Form.Label>
            <Form.Control value={title} name='title' type="text" placeholder="Enter Event Title" onChange={this.onChangeInput}/>
            { error && <p style={{backgroundColor: 'red'}}>{error}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Event Date</Form.Label>
            <Form.Control 
              type="date" 
              onChange={this.onChangeInput}
              placeholder="Event Date" 
              name='date'
              value={date}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Place</Form.Label>
            <Form.Control type="text" value={placeId} name='placeId' placeholder="Enter Event Place" onChange={this.onChangeInput}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Hosted By</Form.Label>
            <Form.Control type="text" value={hostedBy} name='hostedBy' placeholder="Enter Hosted Person" onChange={this.onChangeInput}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control 
              type="text" 
              value={description} 
              name='description'
              placeholder="Description" 
              onChange={this.onChangeInput}
              as="textarea" rows="3"
            />
          </Form.Group>
          <div className="align-center">
          <Button variant="info" onClick={this.submitEvent}>Submit Event</Button>
          </div>
          
        </Form>
        </Container>
      </Fragment>
    )
  }
}

export default CreateEvent;