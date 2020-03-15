import React, {Fragment, Component} from 'react'; 
import './takeATour.css'; 
import bgSearchBar from '../../../src/upload/image/bg-searchbar.jpg'; 
import { MdFlightTakeoff, MdLocalHotel, MdArrowForward } from "react-icons/md";
import { IoIosCar } from "react-icons/io";

class TakeATour extends Component{ 
  scrapeingMe(parm){ 
    console.log("Yes we can do this"); 
    console.log(parm); 
  }
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
                <p style={{color:"white", margin:"0"}}>Cabin Class and Travelers</p>
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
      <div className="container">
        <div className="row">  
          <div className="col-3">
            <table className="table table-bordered table-dark" border="3" style={{textAlign:"right"}}>
              <tr><th><a onClick={this.scrapeingMe.bind(this,'a')}>Africa</a></th></tr>
              <tr><th><a onClick={this.scrapeingMe.bind(this,'b')}>Ashia</a></th></tr>
            </table>
          </div>
          <div className="col-9">
            
          </div>
          
        </div>
      
      </div>
      </Fragment>
      
    )
  }
}
export default TakeATour;

// https://www.uxbooth.com/articles/best-practices-for-search/
