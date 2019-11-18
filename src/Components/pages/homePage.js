import React from 'react';
import '../../css/global.css';
import '../../css/pages/homePage.css';
import { Fade } from 'react-slideshow-image';

import Footer from '../org/footer';
import ContactSegment from './../mol/contactsegment';
import GalleryPreview from './../org/galleryPreview';
import Services from './../mol/services';
import Client from './../mol/client';

class HomePage extends React.Component {
    render(){
        return(
            <div className="page-content">
                <Slider />
                <Services />
                <GalleryPreview />
                <Client />
                <ContactSegment />
                <Footer />
            </div>
        );
    }
}

const Slider =()=> {
    return(
        <div className="slider"><Slideshow /></div>
    );
}

const fadeImages = [
    'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/2096578/pexels-photo-2096578.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
];
   
const fadeProperties = {
    duration: 8000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img alt="0" src={fadeImages[0]} />
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="1" src={fadeImages[1]} />
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="2" src={fadeImages[2]} />
            </div>
            <h2></h2>
          </div>
        </Fade>
      </div>
    )
  }

export default HomePage;