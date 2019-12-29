import React, { Fragment } from 'react';
import './signup.css';

const Signup = () => {
  const countryList = [
    "Select Country",
    "Afganisthan",
    "Bangladesh",
    "Chaina",
    "Dubai(UAE)",
    "Egypt"
  ];
  const countryListOptions = () =>{
    var list = [];
    for(let i=0; i < countryList.length; i++){
      list.push(<option key={i} value="{countryList[i]}">{countryList[i]}</option>)
    }
    return list;
  }

  return (
    <Fragment>
      <div  style={{height:"50px", backgroundColor: ""}}>
        <div className="container">
          <h4 style={{color:""}}>User Registration Form</h4>
        </div>
      </div>

      <div className="container-fluid" id="form-container">
        <div className="row" style={{height:"50px", backgroundColor: "#63738a"}}>
        </div>
        <div className="row ">
          <div className="col-md-4" style={{backgroundColor:"#63738a"}}></div>
          <div className="col-md-4"style={{borderRadius:"10px"}}>
              <form style={{}}>
                <h2>Register</h2>
                <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required"/></div>
                        <div class="col-md-6"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
                    </div>        	
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6"><input type="text" class="form-control" name="first_name" placeholder="Password" required="required"/></div>
                        <div class="col-md-6"><input type="text" class="form-control" name="last_name" placeholder="Confirm Password" required="required"/></div>
                    </div>        	
                </div>        
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <textarea  class="form-control" rows="3" placeholder="Address"></textarea>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <select class="form-control" id="exampleFormControlSelect1">
                          {countryListOptions()}
                        </select>
                      </div>
                      <div style={{marginTop:"19px"}}>
                        <input type="email" class="form-control" name="number" placeholder="Contact Number" required="required"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                    <label class="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                </div>
                <div class="form-group text-center">
                    <button type="submit" class="btn btn-success btn-md ">Register Now</button>
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

export default Signup;
