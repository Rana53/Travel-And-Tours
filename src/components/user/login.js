import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    email: '',
    password: '',
    success: false,
    error: ''
  }
  onHandleEmailInput = (event) => {
    this.setState({
      email: event.target.value
    });
    console.log(event.target.value);
  }
  onHandlePasswordInput = (event) => {
    this.setState({
      password: event.target.value
    });
    console.log(event.target.value);
  }

  onLoginSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);
    console.log('response for login');
    console.log(formData);

    axios.get(`http://localhost:8000/api/user/login`, formData)
      .then((response) => {
        console.log(response.data.message);
      });
  }
  render(){
    return (
      <div className="container-fluid">
        <ul class="dropdown-menu dropdown-menu-right mt-2">
          <li class="px-3 py-2">
            <div style={{paddingBottom:"10px"}}>
              <a class="btn btn-outline-info btn-sm float-right" href="/signup">Singup</a> <br/>
            </div>
            {/* <p>Welcome to our Site.Please enter your <span class="login-color">Login</span> details to login here. Or <span class="sin-color">Register</span> here.</p> */}
            <form class="form" role="form" onSubmit={this.onLoginSubmit}>
              <div class="form-group">
                <input 
                  id="emailInput" 
                  placeholder="Email" 
                  class="form-control form-control-sm" 
                  type="email" 
                  required
                  value={this.state.email}
                  onChange={this.onHandleEmailInput}  
                />
              </div>
              <div class="form-group">
                <input 
                  id="passwordInput" 
                  placeholder="Password" 
                  class="form-control form-control-sm" 
                  type="password" 
                  required
                  value={this.state.password}
                  onChange={this.onHandlePasswordInput}
                />
              </div>
              <div class="form-group">
                <button 
                  type="submit" 
                  class="btn btn-primary btn-block"
                  >
                  Login
                </button>
              </div>
              <div class="form-group text-center">
                <small>
                  <a 
                    href="/" 
                    data-toggle="modal" 
                    data-target="#modalPassword"
                    >
                    Forgot password?
                  </a>
                </small>
              </div>
            </form>
          </li>
        </ul>
      </div>  
    )
  }
}

export default Login;