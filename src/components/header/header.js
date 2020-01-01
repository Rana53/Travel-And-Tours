import React,{ Fragment } from "react";
import Login from '../user/login';

function Header(){
  return(
    <Fragment>
      <nav className="navbar  navbar-expand-lg  navbar-light bg-light fixed-top">
        <div className="container">
            <a className="navbar-brand" href="/">Travel&Tour</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">blog</a>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tour
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="/">Take a Tour</a>
                    <a class="dropdown-item" href="/">Tour Details</a>
                    <a class="dropdown-item" href="/">Custom Tour</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li>
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </li>
                </ul>
            </div>
            
            <div style={{ paddingTop:"fixed", marginLeft:"5px"}}>
              <button type="button" id="dropdownMenu1" data-toggle="dropdown" class="btn btn-outline-success dropdown-toggle">Login <span class="caret"></span></button>
              <Login/>
            </div>
        </div> 
      </nav>        
      <br/>
      <br/>
    </Fragment>
  )     
}
export default Header;

// log in in search bar https://www.codeply.com/go/XefCTinzkY/bootstrap-4-navbar-with-login-form
// icone https://bootsnipp.com/snippets/g5QPQ
// image styling  https://www.youtube.com/watch?v=mePngVPJUlE


