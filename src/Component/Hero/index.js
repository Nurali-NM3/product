import React from 'react';
import './style.scss'
const Hero = ({img}) => {
    return (
        <div className={'container'}>
          <div className="mainProduct">
              <div className="mainProduct-wrapperInfo">
                  <div className="mainProduct-wrapperInfo__box">
                      <h1>
                          An exciting place
                          for the whole family to shop.
                      </h1>
                      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                      <button>Shop Now</button>
                  </div>
              </div>
              {
                  img.map(img =>
                      <div key={img.id} className="mainProduct-wrapperInfo">
                          <img src={img.imageUrl} alt=""/>
                      </div>)
              }
          </div>
        </div>
    );
};

export default Hero;