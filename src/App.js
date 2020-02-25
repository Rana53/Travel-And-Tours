import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/home/home';
import Signup from './components/user/signup';
import About from './components/about';
import TakeATour from './components/tour/takeATour';

function App() {
  return (    
    <BrowserRouter> 
      <header>
        <Header/>
      </header>
      <Route path="/" exact component={Home}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/take-a-tour' component={TakeATour}></Route>
      <div class="container-fluid footer-copyright text-center bg-light"
        style={{height: "50px", width:"100"}}
        >© 2020 Copyright:
        <a href="https://travelandtour.com/"> TravelAndTour.com</a>
      </div>
    </BrowserRouter>
  );
}

export default App;
