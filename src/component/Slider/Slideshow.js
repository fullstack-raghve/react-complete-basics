import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import logo1 from './../../assets/images/1.jpg';
import logo2 from './../../assets/images/2.jpg';
import logo3 from './../../assets/images/3.jpg';

const images = [
    logo1,
    logo2,
    logo3
];

export const Slideshow = () => {
    return (
      <div className="slide-container">
 {/* <div className="logo">
          <img src={logo1} width="100%"  />
        </div> */}
                <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}