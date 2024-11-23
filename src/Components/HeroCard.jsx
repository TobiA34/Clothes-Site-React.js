import React from 'react'
import image1 from "../img/img1.png";

function HeroCard() {
  return (
    <div>
      <div className="beige w-9 rounded rounded-4">
        <div className="row d-flex align-items-center justify-content-between ">
          {/* Left Column */}
          <div className="col-md-8 col-sm-12">
            <div className="p-5 text-dark text-start h-100 d-flex flex-column justify-content-center">
              <h1>
                <strong>Grab Upto 50% off on</strong>
              </h1>
              <h1>
                <strong>Selected clothes</strong>
              </h1>
              <a href="#" className="  green rounded rounded-4 mt-3 w-25">
                Buy now
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-4 col-sm-12 p-0">
            <img src={image1} alt="Model" className="hero-img p-1 mr-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard
