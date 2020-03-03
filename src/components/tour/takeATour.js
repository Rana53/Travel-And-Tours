import React, {Fragment, Component} from 'react'; 
import './takeATour.css'; 
import bgSearchBar from '../../../src/upload/image/bg-searchbar.jpg'; 
import { MdFlightTakeoff, MdLocalHotel } from "react-icons/md";
import { IoIosCar } from "react-icons/io";



class TakeATour extends Component{ 
  render(){ 
    return (  
      <Fragment> 
      <br/>  <br/>
      <div> 
        <div className="container">
          <nav className="primaryNav"> 
                <a id="abar" href="">
                  <b>
                    <MdFlightTakeoff/>
                    <span>Flights</span> 
                  </b>
                </a> 
                <a id="abar" style={{marginLeft:"10px"}} href="">  
                  <b>
                    <MdLocalHotel/>
                    <span>Hotels</span>
                  </b>
                </a> 
                <a id="abar" style={{marginLeft:"10px"}} href="">  
                  <b>
                    <IoIosCar/>
                    <span>Car Rental</span>
                  </b>
                </a> 
            </nav>
        </div>

        <div class="wrapper"> 
          <br/>
          <div className="container">
            <div className="row">
              <form>
                <label class="radio-inline" style={{color:"white"}}>
                  <input class="radio-inline" type="radio" name="optradio"/>Round Trip
                </label>
                <label class="radio-inline" style={{color:"white", paddingLeft:"20px"}}>
                  <input type="radio" name="optradio"/>One Way
                </label>
                <label class="radio-inline" style={{color:"white", paddingLeft:"20px"}}>
                  <input type="radio" name="optradio"/>Multi-city
                </label>  
              </form>
            </div>
            <div className="row">
              <div className="col-3">
                <label style={{color:"white", margin:"0"}}>From</label><br/>
                <input style={{minWidth:"100%"}}/>
              </div>
              <div className="col-3">
                <p style={{color:"white", margin:"0"}}>To</p>
                <input style={{minWidth:"100%"}}/>
              </div>
              <div className="col-3">
                <p style={{color:"white"}}>dep & return</p>
                <input style={{minWidth:"100%"}}/>
              </div>
              <div className="col-3">
                <p style={{color:"white"}}>cabin Class and Travel</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>  
      
      </Fragment>
    )
  }
}
export default TakeATour;

// https://www.uxbooth.com/articles/best-practices-for-search/
