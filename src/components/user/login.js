import React, { Component } from 'react';     
import axios from 'axios'; 

class Login extends Component { 
  constructor(props){ 
    super(props);
    this.state = {
      email: '',
      password: '',
      success: true,  
      error: ''
    }
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
    console.log('submit form');  
    const formData = new FormData();  
    formData.append('email', this.state.email);  
    formData.append('password', this.state.password);  
    console.log('response for login');
   
    axios.post("http://localhost:8000/api/user/login", { email: this.state.email, password: this.state.password})
      .then((response)  =>  {
        this.props.loginInfo();
        this.setState({
          success: true
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user-name", this.state.email);
        console.log("Yap");
        console.log(response.data.message);
        console.log(localStorage.getItem("token"));
      })
      .catch(error =>{
        this.setState({
          success: false
        });
        console.log("XXError message " + error);
      });
  }
  
  render(){  
    return (
      <div className="container-fluid"> 
        <ul className="dropdown-menu dropdown-menu-right mt-2">
          <li className="px-3 py-2">
            <div style={{paddingBottom:"10px"}}>
              <a className="btn btn-outline-info btn-sm float-right" href="/signup">Singup</a> <br/>
            </div>
            
            <form className="form" role="form" onSubmit={this.onLoginSubmit}>
              <div className="form-group">
                <input 
                  id="emailInput" 
                  placeholder="Email" 
                  className="form-control form-control-sm"  
                  type="email" 
                  required
                  value={this.state.email}
                  onChange={this.onHandleEmailInput}  
                />
              </div>
              <div className="form-group">
                <input 
                  id="passwordInput" 
                  placeholder="Password" 
                  className="form-control form-control-sm" 
                  type="password" 
                  required
                  value={this.state.password}
                  onChange={this.onHandlePasswordInput}
                />
              </div>
              <div>
                {this.state.success? "":<p style={{color:"red"}}>email or password not valid</p>}
              </div>
              
            
              <div className="form-group">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block" 
                  >
                  Login
                </button>
              </div>
              <div className="form-group text-center">
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