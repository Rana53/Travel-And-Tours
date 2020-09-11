
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// ------------------bootstrap----------------------
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
//-------------------bootstrap-------------------

import 'semantic-ui-css/semantic.min.css'

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const rootEl = document.getElementById('root');

let render = () =>{
    ReactDOM.render(
      <BrowserRouter>
        <ScrollToTop>
          <App/>
        </ScrollToTop>
      </BrowserRouter>  
    , rootEl);  
  }
  
  if (module.hot) {
    module.hot.accept('./App', () => {
      setTimeout(render);
    })
  }
  
  render();
  
//ReactDOM.render(<App />, document.getElementById('root'));
