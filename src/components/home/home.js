import React,{ Fragment, Component } from 'react';
import './home.css';

import ImageGallery from './imageGallery';

class Home extends Component{
  imagesLink = [
    "https://cdn.pixabay.com/photo/2017/08/15/13/27/natural-2643896_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/03/04/15/10/elephant-279505_960_720.jpg", // "africa": 
   // "https://cdn.pixabay.com/photo/2015/08/02/22/23/photographer-872028_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/14/02/54/agriculture-1822446_960_720.jpg", // "asia": 
    "https://cdn.pixabay.com/photo/2018/05/07/22/08/sydney-opera-house-3381786_960_720.jpg",  // "australia" : 
    "https://cdn.pixabay.com/photo/2016/06/25/22/13/castle-ruins-1479649_960_720.jpg", //"europe": 
    "https://cdn.pixabay.com/photo/2013/11/28/09/59/america-219896_960_720.jpg", // north america
    "https://cdn.pixabay.com/photo/2017/09/26/23/05/rio-de-janeiro-2790455_960_720.jpg", // south america
    "https://cdn.pixabay.com/photo/2016/08/02/09/46/cape-town-1562907_960_720.jpg"
  ];
  countryList = [
    "Bangladesh",
    "Africa",
    //"Antertica",
    "Asia",
    "Australia",
    "Europe",
    "North America", 
    "South America",
    "South Africa"
  ];
  createCardForPlace = () => {
    console.log()
    let imageLength = this.imagesLink.length;
    let itemInRow = 4;
    let table = [];
    for(let i = 0; i < (imageLength/itemInRow) + 1; i++){
      let children = [];
      for(let j = i*itemInRow; j < itemInRow*(i+1) && j < imageLength; j++){
        children.push(
          <div className="col-md-3">
                <div class="card" style={{width: "18rem"}}>
                  <div className="inner">
                    <img 
                      src= {this.imagesLink[j]}
                      class="card-img-top" 
                      alt="..."/>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title">{this.countryList[j]}</h6>
                    <a href="#" class="btn btn-primary">For Details...</a>
                  </div>
                </div>
          </div>
        )
      }
      table.push(
        <div>
          <div className="row justify-content-center">
          {children}
        </div>
        <br/>
        </div>
      );
    }
    return table; 
  }
  render(){
    return (
      <div className="container">
        <div className="row"> 
          <div className="col">
            <h1 className="heading">
            <span style={{ color: "#95bd07"}}>Travel &amp; Explore..</span> <br/>
            <span style={{ color: "#004794"}}>People don't take trips</span> <br/>
            <span style={{ color: "#ffbc00"}}>-- trips take people.</span>
            </h1>
          </div>
        </div>
        <hr/>
        <div>{this.createCardForPlace()}</div>
        <hr/>
        <div class="jumbotron">
          <h1 class="display-4">Hot Deal!!!!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg"  role="button">Learn more</a>
          </p>
        </div>
      </div>  
    )
  }
}

export default Home;



// card image https://www.youtube.com/watch?v=gW2pFkhm2vM

//  http://preview.themeforest.net/item/travel-material-resposnive-html-template-for-travel-bookin/full_screen_preview/23868824