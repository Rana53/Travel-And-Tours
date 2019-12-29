import React from 'react';

const Login = () => {
  return (
      <div className="container">
        
        <div class="row">
	<aside class="col-md-4">
<div class="card"/>
<article class="card-body">
<a href="/" class="float-right btn btn-outline-primary">Sign up</a>
<h4 class="card-title mb-4 mt-1">Sign in</h4>
	 <form>
    <div class="form-group">
    	<label>Your email</label>
        <input name="" class="form-control" placeholder="Email" type="email"/>
    </div> 
    <div class="form-group">
    	<a class="float-right" href="#">Forgot?</a>
    	<label>Your password</label>
        <input class="form-control" placeholder="******" type="password"/>
    </div> 
    <div class="form-group"> 
    <div class="checkbox">
      <label> <input type="checkbox"/> Save password </label>
    </div> 
    </div> 
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Login  </button>
    </div>                                                            
</form>
</article>
</aside>
</div>
      </div>
       
  )
}

export default Login;