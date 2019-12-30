import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/home/home';
import Signup from './components/user/signup';
import About from './components/about';

function App() {
  return (    
    <BrowserRouter>
      <header>
        <Header/>
      </header>
      <Route path="/" exact component={Home}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/about' component={About}></Route>
    </BrowserRouter>
  );
}

export default App;
