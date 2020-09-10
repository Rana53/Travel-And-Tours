import React, { Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/home/home';
import Signup from './components/user/signup';
import About from './components/about';
import TakeATour from './components/tour/takeATour';
import CreateEvent from './components/event/createEvent';
import { Container } from 'react-bootstrap';
import EventDashboard from './components/event/eventDashboard';
import EventDetailedPage from './components/event/EventDetailed/EventDetailedPage'
import User from './components/user/user';
function App() {
  return (    
    <Fragment>
      <Container>
    <BrowserRouter> 
      <header>
        <Header/>
      </header>
      <br/>
      <Route path="/" exact component={Home}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/take-a-tour' component={EventDashboard}></Route>
      <Route path='/create-tour-event' component={CreateEvent}/>
      <Route path='/event/:id' component={EventDetailedPage}/>
      <Route path='/user' component={User}/>
      <div class="container-fluid footer-copyright text-center bg-light"
        style={{height: "50px", width:"100"}}
        >© 2020 Copyright:
        <a href="https://travelandtour.com/">TravelAndTour.com</a>
      </div>
    </BrowserRouter>
    </Container>
    </Fragment>
  );
}

export default App;
