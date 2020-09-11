import React, { Fragment, Component } from 'react';
import './signup.css';
import axios from 'axios';

class Signup extends Component{
  state = {
    mailExist: false,
    isCreated: false
  }
  countryList = [
    "Select Country",
    "Afganisthan",
    "Bangladesh",
    "Chaina",
    "Dubai(UAE)",
    "Egypt"
  ];
  countryListOptions = () =>{
    var list = [];
    for(let i=0; i < this.countryList.length; i++){
      list.push(<option key={i} value="{countryList[i]}">{this.countryList[i]}</option>)
    }
    return list;
  }
  onSubmitForm = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('firstName', this.firstName.value);
    formData.append('lastName', this.lastName.value);
    formData.append('email', this.email.value);
    formData.append('password', this.password.value);
    formData.append('contactNumber',this.contactNumber.value);
    formData.append('address', this.address.value);
    formData.append('country', this.country.value);
    if(this.image.files[0]){
      formData.append('image', this.image.files[0], this.image.files[0].name);
    }
    
    console.log('Before request');
    console.log(formData.get('image'));

    axios.post(`http://localhost:8000/api/user/signup`,formData)
      .then(response => { 
        console.log(response.data.user);
        if(response.data.message === "Mail exist"){
          this.setState({
            mailExist: true
          });
        } else if(response.data.message === "User Created") {
          this.setState({
            mailExist: false,
            isCreated: true
          });
          document.getElementById("form-id").reset();
          this.props.history.push('/');
        } else {
        
        }
        
      })
   
  }
  render(){
  return (
    <Fragment>
      <div  style={{height:"50px", backgroundColor: ""}}>
        { this.state.isCreated?
            <div className="container-fluid"> 
            <div class="alert alert-success" role="alert"><br/>
              User created successfully, back to the home.
            </div>
          </div> :
          <div className="container">
          <h4 style={{color:""}}>/User Registration Form</h4>
        </div>
        }
        </div>

      <div className="container-fluid" id="form-container">
        <div className="row" style={{height:"50px", backgroundColor: "#63738a"}}>
        </div>
        <div className="row ">
          <div className="col-md-4" style={{backgroundColor:"#63738a"}}></div>
          <div className="col-md-4"style={{borderRadius:"10px"}}>
              <form onSubmit={this.onSubmitForm} id="form-id">  {/*--------------------Form start-----------------*/}
                <h2>Register</h2>
                <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                <div>
                  { this.state.mailExist ===true? (
                      <div class="alert alert-danger" role="alert">
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      User email already taken
                    </div>
                    ): null
                  }
                </div>
                 

                <div class="form-group"> {/*-------------------name-----------------------------*/}
                    <div class="row">
                        <div class="col-md-6">
                          <input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" 
                            ref={input => this.firstName = input}
                          />
                        </div>
                        <div class="col-md-6">
                          <input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" 
                            ref={input => this.lastName = input}
                          />
                        </div>
                    </div>        	
                </div> 
                <div class="form-group">  {/*-------------------email-----------------------------*/} 
                    <input type="email" class="form-control" name="email" placeholder="Email" required="required"
                      ref={input => this.email = input}
                    />
                </div>
                <div class="form-group">  {/*-------------------Password-----------------------------*/}
                    <div class="row">
                        <div class="col-md-6">
                          <input type="password" class="form-control" name="first_name" placeholder="Password" required="required" 
                            ref={input => this.password = input}
                          />
                        </div>
                        <div class="col-md-6"><input type="password" class="form-control" name="last_name" placeholder="Confirm Password" required="required" 
                          ref={input => this.passwordAgain = input}
                        />
                      </div>
                    </div>        	
                </div>      
                <div className="form-group"> {/*-------------------Address-----------------------------*/}
                  <div className="row">
                    <div className="col-md-6">
                      <textarea  class="form-control" rows="3" placeholder="Address" 
                        ref={input => this.address = input}
                        >
                      </textarea>
                    </div>
                    <div className="col-md-6"> {/*-------------------Country-----------------------------*/}
                      <div>
                        <select class="form-control" id="exampleFormControlSelect1"  
                            ref={input => this.country = input}
                          >
                          {this.countryListOptions()}
                        </select>
                      </div>
                      <div style={{marginTop:"10px"}}> {/*--------contact number----------*/}
                        <input type="text" class="form-control" name="number" placeholder="Contact Number" required="required" 
                          ref={input => this.contactNumber = input}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                <input type="file" ref={input => this.image = input}/>
  
                </div>

                <div class="form-group">
                    <label class="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="/">Terms of Use</a> &amp; <a href="/"></a>Privacy Policy</label>
                </div>
                <div class="form-group text-center">  {/*-------------------Submit Button-----------------------------*/}
                  <button  class="btn btn-success btn-md"
                      type="submit"
                      
                    >
                    Register Now
                  </button>
                </div>
            </form>
          </div>
          <div className="col-md-4" style={{backgroundColor:"#63738a"}}></div>
        </div>
        <div className="row" style={{height:"50px", backgroundColor: "#63738a"}}></div>
      </div> 
    </Fragment>
      
  )
  }
}

export default Signup;
