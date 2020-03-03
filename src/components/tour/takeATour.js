import React, {Fragment, Component} from 'react'; 
import './takeATour.css'; 
import bgSearchBar from '../../../src/upload/image/bg-searchbar.jpg'; 
import { MdFlightTakeoff, MdLocalHotel, MdArrowForward } from "react-icons/md";
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

        <div class="wrapper"  > 
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

            <form>
            <div className="row">         
              <div className="col-3" id="noPadding">
                <p style={{color:"white", margin:"0"}}>From</p>
                {/*   <input className="inputStyle"/> */}
                <input 
                  type="text" 
                  id="exampleForm2" 
                  class="form-control"
                />   
                <div style={{paddingLeft:"6%"}}>
                  <div>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1" style={{color:"white"}}>Add nearby airports</label>
                  </div>
                  <div >
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1" style={{color:"white"}}>Non-stop flights only</label>
                  </div>
                </div>
              </div>
              <div className="col-3" id="noPadding">
                <p style={{color:"white", margin:"0"}}>To</p>
                {/* <input className="inputStyle"/>*/ }
                <input 
                  type="text" 
                  id="exampleForm2" 
                  class="form-control"
                />
                <div style={{paddingLeft:"6%"}}>
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <label class="form-check-label" for="exampleCheck1" style={{color:"white"}}>Add nearby airports</label>
                </div> 
              </div>
              <div className="col-1" id="noPadding">
                <p style={{color:"white", margin:"0"}}>Depart</p>
               {/* <input className="inputStyle"/>*/}
                <input 
                  type="text" 
                  id="exampleForm2" 
                  class="form-control"
                /> 
              </div>
              <div className="col-1" id="noPadding">
                <p style={{color:"white", margin:"0"}}>Return</p>
               {/* <input className="inputStyle"/>*/}
                <input 
                  type="text" 
                  id="exampleForm2" 
                  class="form-control"
                /> 
              </div>
              <div className="col-3" id="noPadding">
                <p style={{color:"white", margin:"0"}}>cabin Class and Travel</p>
                {/*<input className="inputStyle"/> */}
                <input 
                  type="text" 
                  id="exampleForm2" 
                  class="form-control"
                />
                <div style={{paddingTop: "10px" ,float:"right"}}>
                  <button 
                    type="submit" 
                    class="btn btn-outline-info" 
                    style={{
                      background:"#8CFE6B", 
                      borderRadius:"20px",
                      color: "white"
                    }}
                    
                    >
                    <b>
                    Search your trip  
                    <MdArrowForward/>
                    </b>
                  </button>
                </div>
              </div>
            </div>
            </form>
            <br/> <br/> <br/>
            
          </div>
        </div>
      </div>  
      
      </Fragment>
    )
  }
}
export default TakeATour;

// https://www.uxbooth.com/articles/best-practices-for-search/
